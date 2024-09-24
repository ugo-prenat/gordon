import { DriverCard } from '../drivers/components/DriverCard';
import { Page } from '@/components/nav/Page';
import { useTranslation } from '@/services/i18n/i18n.hooks';
import { useDrivers } from '../drivers/drivers.api';

export const MarketPage = () => {
  const t = useTranslation();

  const { data: drivers, isPending, isError, error } = useDrivers();

  if (isPending) return <div>Loading drivers...</div>;

  if (isError)
    return (
      <div>
        Error: {error.message} code: {error.code}
      </div>
    );

  return (
    <Page title={t('page.market.title')}>
      <div className="flex gap-4">
        {drivers.map((driver) => (
          <DriverCard key={driver.id} driver={driver} />
        ))}
      </div>
    </Page>
  );
};
