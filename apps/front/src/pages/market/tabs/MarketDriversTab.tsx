import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { useDrivers } from '@/pages/drivers/drivers.api';

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
      <div className="flex flex-col gap-y-2">
        {drivers.map((driver) => (
          <Link to={`/drivers/${driver.id}`} key={driver.id}>
            <Button variant="link">{driver.id}</Button>
          </Link>
        ))}
      </div>
    </div>
  );
};
