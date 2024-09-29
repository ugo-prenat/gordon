import { DriverHero } from '../components/hero/DriverHero';
import { DriverRecordsChart } from '../components/records/chart/DriverRecordsChart';
import { useDriver } from '../drivers.api';
import { driverRoute } from '@/services/router/router.routes';

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
      <DriverRecordsChart driverId={id} />
    </>
  );
};
