import { APIError, IAPIError } from '@gordon/models';
import { ClientResponse } from 'hono/client';
import { StatusCode } from 'hono/utils/http-status';
import { storeAccessToken } from './rpc.api';
import { fetchAuthRefreshToken } from '@/features/auth/auth.api';

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
      if (res.status === 403) return handleRefreshToken();

      if (err instanceof APIError) throw err;
      throw new APIError(err.message, 'FDA-1', 500, err);
    });

const handleRefreshToken = () =>
  fetchAuthRefreshToken().then((res) =>
    res
      .json()
      .then((data) => {
        if (res.ok) {
          const { jwt } = data as { jwt: string };
          storeAccessToken(jwt, { isRefreshToken: true });
          window.location.reload();
        }

        const err = data as IAPIError;
        throw new APIError(err.message, err.code, err.status);
      })
      .catch((err) => {
        if (err instanceof APIError) throw err;
        throw new APIError(err.message, 'FDA-1', 500, err);
      })
  );
