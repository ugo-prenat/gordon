import { createRouter } from '@tanstack/react-router';

import { NotFoundPage } from '@/pages/NotFound.page';
import {
  adminRoute,
  driverRoute,
  driversListRoute,
  chassisListRoute,
  fullscreenRoute,
  landingRoute,
  marketRoute,
  protectedRoute,
  rootRoute,
  navRoute,
  userDriverCardRoute,
  userChassisCardRoute,
  marketDriverCardRoute,
  marketChassisCardRoute
} from './router.routes';

const routeTree = rootRoute.addChildren([
  fullscreenRoute.addChildren([landingRoute]),
  navRoute.addChildren([
    protectedRoute.addChildren([
      marketRoute,

      driverRoute,

      driversListRoute,
      userDriverCardRoute,
      marketDriverCardRoute,

      chassisListRoute,
      userChassisCardRoute,
      marketChassisCardRoute,

      adminRoute
    ])
  ])
]);

export const router = createRouter({
  routeTree,
  defaultNotFoundComponent: NotFoundPage
});
