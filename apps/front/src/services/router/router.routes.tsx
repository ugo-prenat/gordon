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
import { OnboardingPage } from '@/pages/onboarding/Onboarding.page';
import { ChassisPage } from '@/pages/chassis/Chassis.page';
import {
  DRIVER_OVERVIEW_TAB,
  DRIVER_PAGE_TABS
} from '@/pages/drivers/drivers.models';
import { z } from 'zod';
import { zodSearchValidator, fallback } from '@tanstack/router-zod-adapter';
import {
  MARKET_CHASSIS_TAB,
  MARKET_DRIVERS_TAB,
  MARKET_TABS
} from '@/pages/market/market.models';

export const rootRoute = createRootRoute();

export const navRoute = createRoute({
  id: 'nav',
  component: NavRoute,
  getParentRoute: () => rootRoute
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
  getParentRoute: () => navRoute,
  validateSearch: zodSearchValidator(
    z.object({ tab: fallback(z.enum(MARKET_TABS), MARKET_DRIVERS_TAB) })
  )
});

export const driversListRoute = createRoute({
  path: '/drivers',
  component: () => (
    <Navigate to="/market" search={{ tab: MARKET_DRIVERS_TAB }} />
  ),
  getParentRoute: () => navRoute
});

export const driverRoute = createRoute({
  path: '/drivers/$id',
  component: DriverPage,
  getParentRoute: () => navRoute,
  validateSearch: zodSearchValidator(
    z.object({ tab: fallback(z.enum(DRIVER_PAGE_TABS), DRIVER_OVERVIEW_TAB) })
  )
});

export const chassisListRoute = createRoute({
  path: '/chassis',
  component: () => (
    <Navigate to="/market" search={{ tab: MARKET_CHASSIS_TAB }} />
  ),
  getParentRoute: () => navRoute
});

export const chassisRoute = createRoute({
  path: '/chassis/$id',
  component: ChassisPage,
  getParentRoute: () => navRoute
});

export const onboardingRoute = createRoute({
  path: '/onboarding',
  component: OnboardingPage,
  getParentRoute: () => fullscreenRoute
});

export const adminRoute = createRoute({
  path: '/admin',
  component: AdminPage,
  getParentRoute: () => navRoute
});
