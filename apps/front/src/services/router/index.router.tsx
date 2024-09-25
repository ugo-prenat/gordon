import { createRouter } from '@tanstack/react-router';

import { NotFoundPage } from '@/pages/NotFound.pages';
import {
  adminRoute,
  driverRoute,
  driversListRoute,
  chassisListRoute,
  chassisRoute,
  fullscreenRoute,
  landingRoute,
  marketRoute,
  navRoute,
  onboardingRoute,
  rootRoute
} from './routes.router';

const routeTree = rootRoute.addChildren([
  fullscreenRoute.addChildren([landingRoute, onboardingRoute]),
  navRoute.addChildren([
    marketRoute,

    driversListRoute,
    driverRoute,

    chassisListRoute,
    chassisRoute,

    adminRoute
  ])
]);

export const router = createRouter({
  routeTree,
  defaultNotFoundComponent: NotFoundPage
});
