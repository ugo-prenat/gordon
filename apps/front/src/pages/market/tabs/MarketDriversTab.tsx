import { useMarketDrivers } from '@/features/market/market.api';
import { CardsListContainer } from '@/features/cards/components/CardsListContainer';
import { MarketCard } from '@/features/cards/components/MarketCard';

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
      <CardsListContainer>
        {data.map((card) => (
          <MarketCard key={card.id} resource="driver" card={card} />
        ))}
      </CardsListContainer>
    </div>
  );
};
