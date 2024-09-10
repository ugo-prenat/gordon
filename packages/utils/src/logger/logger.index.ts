import { MiddlewareHandler } from 'hono/types';
import { colorStatus, getPath, getTime } from './logger.utils';

export const honoLogger = (): MiddlewareHandler => async (c, next) => {
  const req = c.req;
  const start = Date.now();

  await next();
  console.log(
    `${req.method} ${getPath(req)}  ${colorStatus(c.res.status)} ${getTime(
      start
    )}`
  );
};
