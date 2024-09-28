import { useDrivers } from '@/pages/drivers/drivers.api';
import { DriversList } from '@/pages/drivers/DriversList';

export const MarketDriversTab = () => {
  const { data: drivers, isPending, isError, error } = useDrivers();
  if (isPending) return <div>Loading drivers...</div>;

  if (isError)
    return (
      <div>
        Error: {error.message} code: {error.code}
      </div>
    );

  return (
    <div className="p-6">
      <DriversList drivers={drivers} />
    </div>
  );
};
