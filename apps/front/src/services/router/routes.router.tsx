import {
  createRootRoute,
  createRoute,
  Outlet,
  Navigate
} from '@tanstack/react-router';

import { AdminPage } from '@pages/admin/Admin.pages';
import { LandingPage } from '@pages/landing/Landing.pages';
import { DriverPage } from '@pages/driver/Driver.pages';
import { MarketPage } from '@pages/market/Market.pages';
import { NavRoute } from '@components/nav/NavRoute';
import { OnboardingPage } from '@pages/onboarding/Onboarding.pages';
import { ChassisPage } from '@pages/chassis/Chassis.pages';

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
  getParentRoute: () => navRoute
});

export const driversListRoute = createRoute({
  path: '/drivers',
  component: () => <Navigate to="/market" />,
  getParentRoute: () => navRoute
});

export const driverRoute = createRoute({
  path: '/drivers/$id',
  component: DriverPage,
  getParentRoute: () => navRoute
});

export const chassisListRoute = createRoute({
  path: '/chassis',
  component: () => <Navigate to="/market" search={{ tab: 'chassis' }} />,
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
