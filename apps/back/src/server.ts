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
import { usersRoutes } from '@services/users/users.routes';
import { authMiddleware } from '@services/auth/auth.middleware';
import { authRoutes } from '@services/auth/auth.routes';
import { userDriverCardsRouter } from '@services/userDriverCards/userDriverCards.routes';
import { IJwtPayload } from '@services/auth/auth.models';
import { circuitsRouter } from '@services/circuits/circuits.routes';
import { chassisRouter } from '@services/chassis/chassis.routes';
import { chassisCardsRouter } from '@services/chassisCards/chassisCards.routes';
import { userChassisCardsRouter } from '@services/userChassisCards/userChassisCards.routes';
import { myTeamRouter } from '@services/myTeam/myTeam.routes';

type ServerVariables = {
  Variables: {
    jwtPayload: IJwtPayload;
  };
};

const port = +process.env.PORT! || 4000;
const app = new Hono<ServerVariables>();

app.use('*', cors());
app.use('*', honoLogger());
app.use('*', authMiddleware);

const router = app

  .route('/auth', authRoutes)
  .route('/users', usersRoutes)
  .route('/records', recordsRouter)

  .route('/teams', teamsRoutes)
  .route('/drivers', driversRouter)
  .route('/chassis', chassisRouter)
  .route('/circuits', circuitsRouter)

  .route('/market/cards/drivers', driverCardsRouter)
  .route('/market/cards/chassis', chassisCardsRouter)

  .route('/cards/drivers', userDriverCardsRouter)
  .route('/cards/chassis', userChassisCardsRouter)

  .route('/my-team', myTeamRouter)

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
