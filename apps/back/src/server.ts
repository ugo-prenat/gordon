import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { serve } from '@hono/node-server';
import { honoLogger, logger } from '@utils/logger/logger.index';
import { driversRouter } from '@services/drivers/drivers.routes';
import { recordsRouter } from '@services/records/records.routes';
import { handleError } from '@utils/api/api.utils';
import { APIError } from '@gordon/models';

const port = 4000;
const app = new Hono();

app.use('*', cors());
app.use('*', honoLogger());

const router = app
  .route('/drivers', driversRouter)
  .route('/records', recordsRouter);

app.notFound((c) => {
  const err = new APIError(
    `route ${c.req.method} ${c.req.path} does not exist`,
    'IDX-2',
    404
  );
  return handleError(c, 'IDX-2')(err);
});

app.onError((e, c) => handleError(c, 'IDX-1')(e));

export type APIRouter = typeof router;

serve({ fetch: app.fetch, port }, () =>
  logger.info(`⚡️ server listening on port ${port}\n`)
);
