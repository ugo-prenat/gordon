import { APIError, IAPIError } from '@gordon/models';
import { ClientResponse, hc } from 'hono/client';
import { StatusCode } from 'hono/utils/http-status';
import { fetchAuthRefreshToken } from '@/features/auth/auth.api';
import { APIRouter } from '@gordon/back/server';

export const handleRes = <T>(
  res: ClientResponse<T | IAPIError, StatusCode>
): Promise<T> =>
  res
    .json()
    .then((data) => {
      if (res.ok) return data as T;

      const err = data as IAPIError;
      throw new APIError(err.message, err.code, err.status);
    })
    .catch((err) => {
      if (res.status === 403) return handleRefreshToken<T>();
      if (res.status === 401) return handleKillSession<T>();

      if (err instanceof APIError) throw err;
      throw new APIError(err.message, 'API-1', 500, err);
    });

const handleRefreshToken = <T>() =>
  fetchAuthRefreshToken().then((res) =>
    res
      .json()
      .then((data) => {
        if (res.ok) {
          const { jwt } = data as { jwt: string };
          storeAccessToken(jwt, { isRefreshToken: true });
          window.location.reload();
          return null as T;
        }

        const err = data as IAPIError;
        throw new APIError(err.message, err.code, err.status);
      })
      .catch(handleKillSession<T>)
  );

export const handleKillSession = <T>() => {
  // localStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY);
  localStorage.removeItem(SESSION_REFRESHED_STORAGE_KEY);
  localStorage.setItem(KILL_SESSION_STORAGE_KEY, 'true');

  window.location.href = '/';
  return null as T;
};
const ACCESS_TOKEN_STORAGE_KEY = 'accessToken';
const SESSION_REFRESHED_STORAGE_KEY = 'sessionRefreshed';
const KILL_SESSION_STORAGE_KEY = 'sessionKilled';

export const storeAccessToken = (
  token: string,
  { isRefreshToken = false }: { isRefreshToken?: boolean } = {}
) => {
  localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, token);
  if (isRefreshToken)
    localStorage.setItem(SESSION_REFRESHED_STORAGE_KEY, 'true');
};

export const isSessionRefreshed = () => {
  const sessionRefreshed = localStorage.getItem(SESSION_REFRESHED_STORAGE_KEY);
  if (sessionRefreshed) localStorage.removeItem(SESSION_REFRESHED_STORAGE_KEY);
  return !!sessionRefreshed;
};

export const isSessionKilled = () => {
  const sessionKilled = localStorage.getItem(KILL_SESSION_STORAGE_KEY);
  if (sessionKilled) localStorage.removeItem(KILL_SESSION_STORAGE_KEY);
  return !!sessionKilled;
};

const accessToken = localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);

export const api = hc<APIRouter>(import.meta.env.VITE_BACK_URL, {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: accessToken ? `Bearer ${accessToken}` : ''
  }
});
