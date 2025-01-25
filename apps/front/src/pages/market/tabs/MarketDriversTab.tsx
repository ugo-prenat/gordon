import { useMarketDrivers } from '@/features/market/market.api';
import { CardsListContainer } from '@/features/cards/components/CardsListContainer';
import { MarketCard } from '@/features/cards/components/MarketCard';
import { MarketDriverFilters } from '@/features/market/components/filters/MarketDriverFilters';
import { FC, useState } from 'react';
import { MarketDriverCardFilters } from '@gordon/models';
import { mergeFilters } from '../market.utils';
import { isEmpty } from '@gordon/utils';
import { Alert } from '@/components/Alert';
import { useTranslation } from '@/services/i18n/i18n.hooks';

export const MarketDriversTab: FC<{
  unmodifiableFilters?: MarketDriverCardFilters;
}> = ({ unmodifiableFilters = {} }) => {
  const t = useTranslation();
  const [filters, setFilters] = useState<MarketDriverCardFilters>({});

  const { data, isPending, isError, error, refetch } = useMarketDrivers(
    mergeFilters(filters, unmodifiableFilters)
  );

  return (
    <div className="flex h-full overflow-hidden">
      <MarketDriverFilters
        filters={filters}
        onFiltersChange={setFilters}
        unmodifiableFilters={unmodifiableFilters}
      />
      {isPending && <div>Loading drivers...</div>}
      {isError && (
        <Alert
          error={error}
          severity="error"
          action={refetch}
          text={t('page.market.drivers.retrieve.error')}
        />
      )}
      {data && isEmpty(data) && <div>oula</div>}
      {data && (
        <CardsListContainer className="pl-2">
          {data.map((card) => (
            <MarketCard key={card.id} resource="driver" card={card} />
          ))}
        </CardsListContainer>
      )}
    </div>
  );
};
