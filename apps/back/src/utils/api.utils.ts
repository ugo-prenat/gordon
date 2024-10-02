import { APIError, ICompleteAPIError, WithDate } from '@gordon/models';
import { logger } from '@utils/logger/logger.index';
import { Context } from 'hono';
import { serializeError } from 'serialize-error';

export const handleError = (c: Context, backupCode: string) => (e: Error) => {
  const { message, code, status } =
    e instanceof APIError ? e : new APIError(e.message, backupCode, 500, e);

  const originalError = serializeError(e);
  logger.error<ICompleteAPIError>({ code, status, message, originalError });

  return c.json({ code, message, status }, status);
};

export const formatToFront = <
  T extends WithDate<unknown> | WithDate<unknown>[]
>(
  input: T
) =>
  Array.isArray(input)
    ? input.map(({ createdAt, ...rest }) => rest)
    : (({ createdAt, ...rest }) => rest)(input);
