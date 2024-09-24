import { MiddlewareHandler } from 'hono/types';
import { colorStatus, getPath, getTime } from './logger.utils';
import pino from 'pino';

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

export const logger = pino(
  { level: 'info' },
  pino.transport({
    targets: [
      {
        target: 'pino-pretty',
        options: {
          colorize: true,
          sync: true,
          ignore: 'pid,hostname',
          translateTime: 'HH:MM:ss'
        }
      },
      {
        target: 'pino-pretty',
        options: {
          mkdir: true,
          ignore: 'pid,hostname',
          destination: `./logs/gordon-back.log`,
          translateTime: 'yyyy-mm-dd HH:MM:ss'
        }
      }
    ]
  })
);
