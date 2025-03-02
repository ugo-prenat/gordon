import { Page } from '@/components/nav/Page';
import { cardRoute } from '@/services/router/router.routes';
import { useDriverCard } from '../../features/cards/cards.api';
import { DriverCard } from '@/features/cards/components/drivers/DriverCard';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { CardPageSkeleton } from './CardPageSkeleton';
import { CardPageError } from './CardPageError';
import { DriverRecordsChart } from '@/features/records/components/recordsChart/DriverRecordsChart';
import { DriverCardsValuesChart } from '@/features/values/components/DriverCardsValuesChart';
import { CARD_TYPES_WITH_VALUES, CardTypeWithValues } from '@gordon/models';
import { ValueTrendBadge } from '@/features/values/components/ValueTrendBadge';
import { Price } from '@/components/typography';
import { useTranslation } from '@/services/i18n/i18n.hooks';
import { DriverCardDetails } from '@/features/cards/components/drivers/DriverCardDetails';

export const CardPage = () => {
  const { id } = cardRoute.useParams();
  const { data: card, isPending, isError, error, refetch } = useDriverCard(id);

  const t = useTranslation();

  if (isPending) return <CardPageSkeleton />;
  if (isError) return <CardPageError onRefresh={refetch} error={error} />;

  const { driver, type, value, valueTrend } = card;
  const { firstName, lastName } = driver;

  const cardType = type as CardTypeWithValues;
  const showDriverCardsValuesChart = CARD_TYPES_WITH_VALUES.includes(cardType);

  return (
    <Page>
      <div className="h-full flex flex-col lg:flex-row lg:justify-center lg:items-center">
        <div className="min-h-[70vh] w-full lg:w-1/2 flex items-center justify-center lg:py-0">
          <div className="w-3/5 sm:w-1/2 md:w-1/3 lg:w-3/5 xl:w-1/2 pl-6">
            <DriverCard card={card} />
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-full flex flex-col gap-10 lg:overflow-auto p-6">
          <div className="flex flex-col gap-2">
            <Link to={`/drivers/${driver.id}`}>
              <Button variant="link" className="text-4xl font-bold">
                {`${firstName} ${lastName}`}
              </Button>
            </Link>

            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Price className="text-2xl">{value.toLocaleString()}</Price>
                <ValueTrendBadge trend={valueTrend} />
              </div>

              <Button variant="default" className="px-4 py-2 font-bold">
                {t('buy')}
              </Button>
            </div>
          </div>

          <DriverCardDetails card={card} />

          {showDriverCardsValuesChart && (
            <DriverCardsValuesChart driverId={driver.id} type={cardType} />
          )}

          <DriverRecordsChart driverId={driver.id} className="p-0" />
        </div>
      </div>
    </Page>
  );
};
