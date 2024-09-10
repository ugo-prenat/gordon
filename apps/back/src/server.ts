import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { serve } from '@hono/node-server';
import { driversRouter } from '@controllers/drivers/drivers.router';
import { recordsRouter } from '@controllers/records/records.router';
import { honoLogger } from '@gordon/utils';

const port = 4000;
const app = new Hono();

app.use('*', cors());
app.use('*', honoLogger());

const router = app
  .route('/drivers', driversRouter)
  .route('/records', recordsRouter);

app.notFound((c) => {
  const { method, path } = c.req;
  // logger.error(`route ${path} not found`);
  return c.json({ error: `route ${method} ${path} not found` }, 404);
});

app.onError((err, c) => c.json({ error: err.message }, 500));

export type Router = typeof router;

serve({ fetch: app.fetch, port }, () =>
  console.log(`⚡️server listening on port ${port}\n`)
);
