import { Page } from '@/components/nav/Page';
import { useTranslation } from '@/services/i18n/i18n.hooks';
import { useDrivers } from '../drivers/drivers.api';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';

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
      <p>temp drivers</p>
      <div className="flex flex-col">
        {drivers.map((driver) => (
          <Link to={`/drivers/${driver.id}`}>
            <Button variant="link">{driver.id}</Button>
          </Link>
        ))}
      </div>
    </Page>
  );
};
