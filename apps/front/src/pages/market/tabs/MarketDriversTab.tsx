import { useMarketDrivers } from '@/features/market/market.api';
import { CardsListContainer } from '@/features/cards/components/CardsListContainer';
import { MarketCard } from '@/features/cards/components/MarketCard';
import { MarketDriverFilters } from '@/features/market/components/filters/MarketDriverFilters';
import { useState } from 'react';
import { MarketDriverCardFilters } from '@gordon/models';
import { mergeFilters } from '../market.utils';
import { isEmpty } from '@gordon/utils';

const unmodifiableFilters: MarketDriverCardFilters = {
  championships: ['f2'],
  seasons: [2025]
};

export const MarketDriversTab = () => {
  const [filters, setFilters] = useState<MarketDriverCardFilters>({});

  const { data, isPending, isError, error } = useMarketDrivers(
    mergeFilters(filters, unmodifiableFilters)
  );

  return (
    <div className="flex gap-6 p-6">
      <MarketDriverFilters
        filters={filters}
        onFiltersChange={setFilters}
        unmodifiableFilters={unmodifiableFilters}
      />
      {isPending && <div>Loading drivers...</div>}
      {isError && (
        <div>
          Error: {error.message} code: {error.code}
        </div>
      )}
      {data && isEmpty(data) && <div>oula</div>}
      {data && (
        <CardsListContainer>
          {data.map((card) => (
            <MarketCard key={card.id} resource="driver" card={card} />
          ))}
        </CardsListContainer>
      )}
    </div>
  );
};
