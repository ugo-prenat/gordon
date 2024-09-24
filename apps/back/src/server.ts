import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { serve } from '@hono/node-server';
import { honoLogger, logger } from '@utils/logger/logger.index';
import { driversRouter } from '@services/drivers/drivers.routes';
import { recordsRouter } from '@services/records/records.routes';
import { handleError } from '@utils/api/api.utils';

const port = 4000;
const app = new Hono();

app.use('*', cors());
app.use('*', honoLogger());

const router = app
  .route('/drivers', driversRouter)
  .route('/records', recordsRouter);

app.notFound((c) =>
  c.json({ error: `route ${c.req.method} ${c.req.path} not found` }, 404)
);

app.onError(handleError('IDX-1'));

export type APIRouter = typeof router;

serve({ fetch: app.fetch, port }, () =>
  logger.info(`⚡️ server listening on port ${port}\n`)
);
