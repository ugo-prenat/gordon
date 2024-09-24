import { APIError } from '@gordon/models';
import { Context } from 'hono';
import { HTTPResponseError } from 'hono/types';

export const handleError =
  (backupCode: string) => (e: Error | HTTPResponseError, c: Context) => {
    const { message, code, status } =
      e instanceof APIError ? e : new APIError(e.message, backupCode, 500, e);

    // logger.error
    return c.json({ error: message, code, status }, status);
  };
