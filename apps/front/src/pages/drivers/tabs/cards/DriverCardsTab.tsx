import { MarketDriversTab } from '@/pages/market/tabs/MarketDriversTab';
import { driverRoute } from '@/services/router/router.routes';

export const DriverCardsTab = () => {
  const { id: driverId } = driverRoute.useParams();

  return <MarketDriversTab unmodifiableFilters={{ driverId }} />;
};
