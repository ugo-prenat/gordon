import { DriverHero } from '../components/hero/DriverHero';
import { useDriver } from '../drivers.api';
import { driverRoute } from '@/services/router/routes.router';

export const DriverOverviewTab = () => {
  const { id } = driverRoute.useParams();

  const { data: driver, isPending, isError, error } = useDriver(id);

  if (isPending) return <div>Loading driver...</div>;

  if (isError)
    return (
      <div>
        Error: {error.message} code: {error.code}
      </div>
    );

  return (
    <>
      <DriverHero driver={driver} />
    </>
  );
};
