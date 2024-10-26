import { DriverRecordsChart } from '@/features/records/components/recordsChart/DriverRecordsChart';
import { DriverHero } from './hero/DriverHero';
import { useDriver } from '../../drivers.api';
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
