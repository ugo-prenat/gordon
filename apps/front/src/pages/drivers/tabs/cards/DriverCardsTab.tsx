import { MarketDriversTab } from '@/pages/market/tabs/MarketDriversTab';
import { driverRoute } from '@/services/router/router.routes';

export const DriverCardsTab = () => {
  const { id: driverId } = driverRoute.useParams();
  const { tab, ...defaultFilters } = driverRoute.useSearch();

  return (
    <MarketDriversTab
      otherFilters={{ tab }}
      defaultFilters={defaultFilters}
      unmodifiableFilters={{ driverId }}
    />
  );
};
