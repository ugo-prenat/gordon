import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { serve } from '@hono/node-server';
import { honoLogger, logger } from '@utils/logger/logger.index';
import { APIError } from '@gordon/models';
import { handleError } from '@utils/api.utils';

import { driversRouter } from '@services/drivers/drivers.routes';
import { recordsRouter } from '@services/records/records.routes';
import { driverCardsRouter } from '@services/driverCards/driverCards.routes';
import { teamsRoutes } from '@services/teams/teams.routes';

const port = 4000;
const app = new Hono();

app.use('*', cors());
app.use('*', honoLogger());

const router = app
  .route('/drivers', driversRouter)
  .route('/records', recordsRouter)

  // DRIVER CARDS
  // /cards/drivers/market
  // /cards/drivers/market/:id
  .route('/cards/drivers/market', driverCardsRouter)

  // CHASSIS CARDS
  // /cards/chassis/market
  // /cards/chassis/market/:id

  // USER DRIVER CARDS
  // /cards/drivers
  // /cards/drivers/:id

  // USER CHASSIS CARDS
  // /cards/chassis
  // /cards/chassis/:id

  .route('/teams', teamsRoutes)

  .notFound((c) => {
    const err = new APIError(
      `route ${c.req.method} ${c.req.path} does not exist`,
      'IDX-2',
      404
    );
    return handleError(c, 'IDX-2')(err);
  })

  .onError((e, c) => handleError(c, 'IDX-1')(e));

export type APIRouter = typeof router;

serve({ fetch: app.fetch, port }, () =>
  logger.info(`⚡️ server listening on port ${port}\n`)
);
