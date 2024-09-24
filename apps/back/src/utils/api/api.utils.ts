import { APIError } from '@gordon/models';
import { logger } from '@utils/logger/logger.index';
import { Context } from 'hono';
import { HTTPResponseError } from 'hono/types';
import { serializeError } from 'serialize-error';

export const handleError =
  (backupCode: string) => (e: Error | HTTPResponseError, c: Context) => {
    const { message, code, status } =
      e instanceof APIError ? e : new APIError(e.message, backupCode, 500, e);

    logger.error({
      code,
      status,
      error: message,
      originalError: serializeError(e)
    });
    return c.json({ error: message, code, status }, status);
  };
