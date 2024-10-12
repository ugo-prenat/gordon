import { useMarketDrivers } from '@/pages/drivers/drivers.api';
import { MarketDriverCardsList } from '@/components/cards/drivers/MarketDriverCardsList';

export const MarketDriversTab = () => {
  const { data, isPending, isError, error } = useMarketDrivers();

  if (isPending) return <div>Loading drivers...</div>;

  if (isError)
    return (
      <div>
        Error: {error.message} code: {error.code}
      </div>
    );

  return (
    <div className="p-6">
      <MarketDriverCardsList cards={data} />
    </div>
  );
};
