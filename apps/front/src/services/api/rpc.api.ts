import type { APIRouter } from '@gordon/back/server';
import { hc } from 'hono/client';

const accessTokenStorageKey = 'accessToken';
const sessionRefreshedStorageKey = 'sessionRefreshed';
export const accessToken = localStorage.getItem(accessTokenStorageKey);
export const storeAccessToken = (
  token: string,
  { isRefreshToken = false }: { isRefreshToken?: boolean } = {}
) => {
  localStorage.setItem(accessTokenStorageKey, token);
  if (isRefreshToken) localStorage.setItem(sessionRefreshedStorageKey, 'true');
};

export const isSessionRefreshed = () => {
  const sessionRefreshed = localStorage.getItem(sessionRefreshedStorageKey);
  if (sessionRefreshed) localStorage.removeItem(sessionRefreshedStorageKey);
  return !!sessionRefreshed;
};

export const api = hc<APIRouter>(import.meta.env.VITE_BACK_URL, {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: accessToken ? `Bearer ${accessToken}` : ''
  }
});
