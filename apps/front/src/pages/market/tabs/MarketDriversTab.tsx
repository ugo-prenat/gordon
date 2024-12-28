import { useMarketDrivers } from '@/features/market/market.api';
import { CardsListContainer } from '@/features/cards/components/CardsListContainer';
import { MarketCard } from '@/features/cards/components/MarketCard';
import { MarketDriverFilters } from '@/features/market/components/filters/MarketDriverFilters';
import { useState } from 'react';
import { MarketDriverCardFilters } from '@gordon/models';

export const MarketDriversTab = () => {
  const [filters, setFilters] = useState<MarketDriverCardFilters>({});

  const unmodifiableFilters: MarketDriverCardFilters = {
    championships: ['f2']
  };
  const { data, isPending, isError, error } = useMarketDrivers(
    filters,
    unmodifiableFilters
  );

  if (isPending) return <div>Loading drivers...</div>;

  if (isError)
    return (
      <div>
        Error: {error.message} code: {error.code}
      </div>
    );

  return (
    <div className="flex gap-6 p-6">
      <MarketDriverFilters
        filters={filters}
        onFiltersChange={setFilters}
        unmodifiableFilters={unmodifiableFilters}
      />
      <CardsListContainer>
        {data.map((card) => (
          <MarketCard key={card.id} resource="driver" card={card} />
        ))}
      </CardsListContainer>
    </div>
  );
};
