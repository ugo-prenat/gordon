import { IDriver } from '@gordon/models';
import { DriverCard } from '../drivers/components/DriverCard';
import { Page } from '@/components/nav/Page';
import { useTranslation } from '@/services/i18n/i18n.hooks';
import { useState, useEffect } from 'react';
import { client } from '@/services/api/api';

export const MarketPage = () => {
  const t = useTranslation();

  const [drivers, setDrivers] = useState<IDriver[]>([]);

  const handleGetDrivers = () =>
    client.drivers
      .$get()
      .then((res) => (res.ok ? res.json() : Promise.reject(res))) // handle request function
      .then((drivers: IDriver[]) => {
        setDrivers(drivers);
      });

  useEffect(() => {
    handleGetDrivers();
  }, []);

  console.log(drivers);

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
