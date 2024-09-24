import { APIError } from '@gordon/models';
import { ensureError } from '@gordon/utils';
import { ClientResponse } from 'hono/client';
import { StatusCode } from 'hono/utils/http-status';

export const handleResponse = <T>(
  res: ClientResponse<T, StatusCode>
): Promise<T> => {
  if (res.ok) return res.json() as Promise<T>;

  return res.json().then((err) => {
    if (err instanceof APIError) throw err;
    throw new APIError(res.statusText, res.status, ensureError(err));
  });
};
