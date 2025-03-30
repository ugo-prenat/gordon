import {
  createRootRoute,
  createRoute,
  Outlet,
  Navigate
} from '@tanstack/react-router';

import { AdminPage } from '@/pages/admin/Admin.page';
import { LandingPage } from '@/pages/landing/Landing.page';
import { DriverPage } from '@/pages/drivers/Driver.page';
import { MarketPage } from '@/pages/market/Market.page';
import { NavRoute } from '@components/nav/NavRoute';
import { ChassisPage } from '@/pages/chassis/Chassis.page';
import { DRIVER_PAGE_TABS } from '@/pages/drivers/drivers.models';
import { z } from 'zod';
import { zodSearchValidator } from '@tanstack/router-zod-adapter';
import { MARKET_CHASSIS_TAB, MARKET_TABS } from '@/pages/market/market.models';
import { CardPage } from '@/pages/cards/Card.page';
import { marketCardFiltersSchema } from '@gordon/models';
import { ProtectedRoute } from '@/components/nav/ProtectedRoute';

export const rootRoute = createRootRoute();

export const navRoute = createRoute({
  id: 'nav',
  component: NavRoute,
  getParentRoute: () => rootRoute
});

export const protectedRoute = createRoute({
  id: 'protected',
  component: ProtectedRoute,
  getParentRoute: () => navRoute
});

export const fullscreenRoute = createRoute({
  id: 'fullscreen',
  component: Outlet,
  getParentRoute: () => rootRoute
});

export const landingRoute = createRoute({
  path: '/',
  component: LandingPage,
  getParentRoute: () => fullscreenRoute
});

export const marketRoute = createRoute({
  path: '/market',
  component: MarketPage,
  getParentRoute: () => protectedRoute,
  validateSearch: zodSearchValidator(
    z
      .object({ tab: z.enum(MARKET_TABS).optional() })
      .merge(marketCardFiltersSchema)
  )
});

export const driversListRoute = createRoute({
  path: '/drivers',
  component: () => <Navigate to="/market" />,
  getParentRoute: () => protectedRoute
});

export const driverRoute = createRoute({
  path: '/drivers/$id',
  component: DriverPage,
  getParentRoute: () => protectedRoute,
  validateSearch: zodSearchValidator(
    z
      .object({ tab: z.enum(DRIVER_PAGE_TABS).optional() })
      .merge(marketCardFiltersSchema)
  )
});

export const chassisListRoute = createRoute({
  path: '/chassis',
  component: () => (
    <Navigate to="/market" search={{ tab: MARKET_CHASSIS_TAB }} />
  ),
  getParentRoute: () => protectedRoute
});

export const cardRoute = createRoute({
  path: '/market/drivers/$id',
  component: CardPage,
  getParentRoute: () => protectedRoute
});

export const chassisRoute = createRoute({
  path: '/market/chassis/$id',
  component: ChassisPage,
  getParentRoute: () => protectedRoute
});

export const adminRoute = createRoute({
  path: '/admin',
  component: AdminPage,
  getParentRoute: () => protectedRoute
});
