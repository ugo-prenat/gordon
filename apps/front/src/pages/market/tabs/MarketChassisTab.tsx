import { FC } from 'react';
import { MarketChassisCardFilters } from '@gordon/models';
import { useTranslation } from '@/services/i18n/i18n.hooks';
import { marketRoute } from '@/services/router/router.routes';
import { mergeFilters } from '@/features/market/market.utils';
import { useMarketChassis } from '@/features/market/market.api';
import { CardsListContainer } from '@/features/cards/components/CardsListContainer';
import { Alert } from '@/components/Alert';
import { isEmpty, isNotEmpty } from '@gordon/utils';
import { Button } from '@/components/ui/button';
import NoResultImgSrc from '@/assets/search-no-result.png';
import { ChassisMarketCard } from '@/features/cards/components/chassis/ChassisMarketCard';
import { useMarketFilters } from '@/features/market/market.hooks';
import { MarketFilters } from '@/features/market/components/filters/MarketFilters';

export const MarketChassisTab: FC<{
  defaultFilters?: MarketChassisCardFilters;
  otherFilters?: Record<string, unknown>;
  unmodifiableFilters?: MarketChassisCardFilters;
}> = ({ defaultFilters = {}, otherFilters = {}, unmodifiableFilters = {} }) => {
  const t = useTranslation();
  const navigate = marketRoute.useNavigate();

  const { filters, onFiltersChange, onClearFilters } = useMarketFilters({
    navigate,
    otherFilters,
    defaultFilters,
    unmodifiableFilters
  });

  const { data, isPending, isError, error, refetch } = useMarketChassis(
    mergeFilters(filters, unmodifiableFilters)
  );

  return (
    <div className="flex h-full overflow-hidden">
      <MarketFilters
        filters={filters}
        onFiltersChange={onFiltersChange}
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
        <NoResultState onFiltersClear={onClearFilters} />
      )}
      {data && isNotEmpty(data) && (
        <CardsListContainer className="pl-2">
          {data.map((card) => (
            <ChassisMarketCard key={card.id} card={card} />
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
          {t('page.market.chassis.search.noResults')}
        </p>
        <Button variant="outline" size="sm" onClick={onFiltersClear}>
          {t('page.market.search.clearFilters')}
        </Button>
      </div>
    </div>
  );
};

const LoadingState = () => <p>attend</p>;
