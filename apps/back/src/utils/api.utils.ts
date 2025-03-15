import { APIError, ICompleteAPIError, WithDate } from '@gordon/models';
import { logger } from '@utils/logger/logger.index';
import { Context } from 'hono';
import { StatusCode } from 'hono/utils/http-status';
import { serializeError } from 'serialize-error';

export const handleError =
  (
    c: Context,
    backupCode: string,
    overrideMessage?: string,
    overrideStatus?: StatusCode
  ) =>
  (e: Error) => {
    const { message, code, status } =
      e instanceof APIError
        ? e
        : new APIError(
            overrideMessage || e.message,
            backupCode,
            overrideStatus || 500,
            e
          );

    const originalError = serializeError(e);
    logger.error<ICompleteAPIError>({ code, status, message, originalError });

    return c.json({ code, message, status }, status);
  };

export const formatToFront = <
  T extends WithDate<unknown> | WithDate<unknown>[]
>(
  input: T
) => {
  if (Array.isArray(input))
    return input.map(({ createdAt, ...rest }) => rest) as T;

  const { createdAt, ...rest } = input;
  return rest;
};
