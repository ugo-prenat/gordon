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
import { DRIVER_PAGE_TABS } from '@/pages/drivers/drivers.models';
import { z } from 'zod';
import { zodSearchValidator } from '@tanstack/router-zod-adapter';
import { MARKET_CHASSIS_TAB, MARKET_TABS } from '@/pages/market/market.models';
import { marketCardFiltersSchema } from '@gordon/models';
import { ProtectedRoute } from '@/components/nav/ProtectedRoute';
import { UserDriverCardPage } from '@/pages/cards/drivers/UserDriverCard.page';
import { UserChassisCardPage } from '@/pages/cards/chassis/userChassisCard.page';
import { MarketDriverCardPage } from '@/pages/cards/drivers/MarketDriverCard.page';
import { MarketChassisCardPage } from '@/pages/cards/chassis/MarketChassisCard.page';

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

export const marketDriverCardRoute = createRoute({
  path: '/market/cards/drivers/$id',
  component: MarketDriverCardPage,
  getParentRoute: () => protectedRoute
});

export const marketChassisCardRoute = createRoute({
  path: '/market/cards/chassis/$id',
  component: MarketChassisCardPage,
  getParentRoute: () => protectedRoute
});

export const userDriverCardRoute = createRoute({
  path: '/cards/drivers/$id',
  component: UserDriverCardPage,
  getParentRoute: () => protectedRoute
});

export const userChassisCardRoute = createRoute({
  path: '/cards/chassis/$id',
  component: UserChassisCardPage,
  getParentRoute: () => protectedRoute
});

export const adminRoute = createRoute({
  path: '/admin',
  component: AdminPage,
  getParentRoute: () => protectedRoute
});
