import { useMarketDrivers } from '@/features/market/market.api';
import { CardsListContainer } from '@/features/cards/components/CardsListContainer';
import { MarketCard } from '@/features/cards/components/MarketCard';
import { MarketDriverFilters } from '@/features/market/components/filters/MarketDriverFilters';
import { FC, useState } from 'react';
import { MarketDriverCardFilters } from '@gordon/models';
import { mergeFilters } from '../market.utils';
import { isEmpty, isNotEmpty } from '@gordon/utils';
import { Alert } from '@/components/Alert';
import { useTranslation } from '@/services/i18n/i18n.hooks';
import { DriverCardSkeleton } from '@/features/cards/components/drivers/DriverCardSkeleton';
import { Button } from '@/components/ui/button';
import NoResultImgSrc from '@/assets/search-no-result.png';
import { marketRoute } from '@/services/router/router.routes';

export const MarketDriversTab: FC<{
  defaultFilters?: MarketDriverCardFilters;
  otherFilters?: Record<string, unknown>;
  unmodifiableFilters?: MarketDriverCardFilters;
}> = ({ defaultFilters = {}, otherFilters = {}, unmodifiableFilters = {} }) => {
  const t = useTranslation();
  const navigate = marketRoute.useNavigate();

  const [filters, setFilters] = useState<MarketDriverCardFilters>(
    mergeFilters(defaultFilters, unmodifiableFilters)
  );

  const { data, isPending, isError, error, refetch } = useMarketDrivers(
    mergeFilters(filters, unmodifiableFilters)
  );

  const handleFiltersChange = (
    key: keyof MarketDriverCardFilters,
    value: unknown
  ) => {
    const newFilters = mergeFilters(
      { ...filters, [key]: value },
      unmodifiableFilters
    );
    setFilters(newFilters);
    navigate({ search: { ...otherFilters, ...newFilters } });
  };

  const handleClearFilters = () => {
    setFilters({});
    navigate({ search: otherFilters });
  };

  return (
    <div className="flex h-full overflow-hidden">
      <MarketDriverFilters
        filters={filters}
        onFiltersChange={handleFiltersChange}
        unmodifiableFilters={unmodifiableFilters}
      />
      {isPending && <LoadingState />}
      {isError && (
        <Alert
          error={error}
          severity="error"
          action={refetch}
          className="flex-1 m-6 ml-0"
          text={t('page.market.drivers.retrieve.error')}
        />
      )}
      {data && isEmpty(data) && (
        <NoResultState onFiltersClear={handleClearFilters} />
      )}
      {data && isNotEmpty(data) && (
        <CardsListContainer className="pl-2">
          {data.map((card) => (
            <MarketCard key={card.id} resource="driver" card={card} />
          ))}
        </CardsListContainer>
      )}
    </div>
  );
};

const NoResultState = ({ onFiltersClear }: { onFiltersClear: () => void }) => {
  const t = useTranslation();
  return (
    <div className="flex-1 flex flex-col items-center justify-center w-full p-6 pl-0 ">
      <img
        alt="No result"
        draggable={false}
        src={NoResultImgSrc}
        className="filter grayscale w-4/5 md:w-1/2 lg:w-1/3 opacity-40 [mask-image:linear-gradient(to_top,transparent_0%,black_70%)]"
      />
      <div className="flex flex-col items-center gap-2 -mt-6">
        <p className="text-lg font-medium text-muted-foreground/80">
          {t('page.market.drivers.search.noResults')}
        </p>
        <Button variant="outline" size="sm" onClick={onFiltersClear}>
          {t('page.market.drivers.search.clearFilters')}
        </Button>
      </div>
    </div>
  );
};

const LoadingState = () => (
  <CardsListContainer className="pl-2">
    <DriverCardSkeleton />
    <DriverCardSkeleton />
    <DriverCardSkeleton />
    <DriverCardSkeleton />
    <DriverCardSkeleton />
  </CardsListContainer>
);
