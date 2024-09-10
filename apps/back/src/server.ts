import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { driversRouter } from '@controllers/drivers/drivers.router';
import { recordsRouter } from '@controllers/records/records.router';

const app = new Hono();

const router = app
  .route('/drivers', driversRouter)
  .route('/records', recordsRouter);

export type Router = typeof router;

serve({ fetch: app.fetch, port: 4000 });
