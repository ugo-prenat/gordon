import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { serve } from '@hono/node-server';
import { honoLogger } from '@gordon/utils';
import { driversRouter } from '@controllers/drivers/drivers.routes';
import { recordsRouter } from '@controllers/records/records.routes';
import { scrap } from '@scraper/scraper.actions';
import { UNUSED_DRIVERS } from '@scraper/scraper.models';

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

const toggle = false;
// const toggle = true;
if (toggle) scrap(UNUSED_DRIVERS);
