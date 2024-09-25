import { APIError, IAPIError } from '@gordon/models';
import { logger } from '@utils/logger/logger.index';
import { Context } from 'hono';
import { HTTPResponseError } from 'hono/types';
import { serializeError } from 'serialize-error';

export const handleError =
  (backupCode: string) => (e: Error | HTTPResponseError, c: Context) => {
    const { message, code, status } =
      e instanceof APIError ? e : new APIError(e.message, backupCode, 500, e);

    const error: IAPIError = {
      code,
      status,
      message,
      originalError: serializeError(e)
    };

    logger.error(error);
    const { originalError, ...rest } = error;
    return c.json(rest, status);
  };
