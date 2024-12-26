import { ICompleteAPIError, MarketDriverCardFilters } from '@gordon/models';
import { logger } from '@utils/logger/logger.index';
import { MiddlewareHandler } from 'hono';
import { ZodSchema } from 'zod';

export const queriesValidator =
  <T extends ZodSchema>(
    schema: T
  ): MiddlewareHandler<{
    Variables: { queries: MarketDriverCardFilters };
  }> =>
  async (c, next) => {
    const { name, teamIds, types, seasons, championships, value } =
      c.req.query();

    const rawQueries = {
      name,
      types: types?.split(','),
      teamIds: teamIds?.split(','),
      seasons: seasons?.split(',').map(Number),
      championships: championships?.split(','),
      value: value
        ? {
            min: Number(value.split(',')[0]),
            max: Number(value.split(',')[1])
          }
        : undefined
    };

    const parsedQueries = schema.safeParse(rawQueries);

    if (!parsedQueries.success) {
      const code = 'QVM-1';
      const status = 400;
      const message =
        'invalid types, queries must match MarketDriverCardFilters interface';

      logger.error<ICompleteAPIError>({
        code,
        status,
        message,
        originalError: parsedQueries.error
      });
      return c.json({ code, message, status }, status);
    }

    c.set('queries', parsedQueries.data);

    await next();
  };
