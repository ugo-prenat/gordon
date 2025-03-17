import { createRouter } from '@tanstack/react-router';

import { NotFoundPage } from '@/pages/NotFound.page';
import {
  adminRoute,
  driverRoute,
  driversListRoute,
  chassisListRoute,
  chassisRoute,
  fullscreenRoute,
  landingRoute,
  marketRoute,
  protectedRoute,
  rootRoute,
  cardRoute,
  navRoute
} from './router.routes';

const routeTree = rootRoute.addChildren([
  fullscreenRoute.addChildren([landingRoute]),
  navRoute.addChildren([
    protectedRoute.addChildren([
      marketRoute,

      driversListRoute,
      driverRoute,

      chassisListRoute,
      chassisRoute,

      adminRoute,
      cardRoute
    ])
  ])
]);

export const router = createRouter({
  routeTree,
  defaultNotFoundComponent: NotFoundPage
});
