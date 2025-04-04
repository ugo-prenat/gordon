import { FC } from 'react';
import {
  CARD_TYPES_WITH_VALUES,
  CardTypeWithValues,
  IMarketDriverCard,
  IUserDriverCard
} from '@gordon/models';
import { DriverRecordsChart } from '@/features/records/components/recordsChart/DriverRecordsChart';
import { Page } from '@/components/nav/Page';
import { DriverCardsValuesChart } from '@/features/values/components/DriverCardsValuesChart';
import { DriverCardDetails } from '@/features/cards/components/drivers/DriverCardDetails';
import { CardTradeBtn } from '@/features/cards/components/CardTradeBtn';
import { PercentValue } from '@/components/typography';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Price } from '@/components/Price';
import { DriverCard } from '@/features/cards/components/drivers/DriverCard';

export const DriverCardPage: FC<{
  card: IMarketDriverCard;
  userDriverCard?: IUserDriverCard;
}> = ({ card, userDriverCard }) => {
  const { driver, type, value, valueTrend, id } = card;
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
        <div className="w-full lg:w-1/2 h-full flex flex-col gap-10 lg:overflow-auto p-4 md:p-10">
          <div className="flex flex-col gap-2">
            <Link to={`/drivers/${driver.id}`}>
              <Button variant="link" className="text-4xl font-bold">
                {`${firstName} ${lastName}`}
              </Button>
            </Link>

            <div className="flex items-center justify-between gap-4">
              <div className="flex items-end gap-2">
                <Price
                  value={value}
                  initialAnimate
                  colorAnimation
                  percentage={valueTrend}
                  className="text-2xl [&>span]:text-lg"
                />
                <PercentValue value={valueTrend} className="mb-1" />
              </div>

              <CardTradeBtn cardId={id} cardValue={value} resource="driver" />
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
