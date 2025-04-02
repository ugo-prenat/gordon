import { FC } from 'react';
import { IMarketChassisCard, IUserChassisCard } from '@gordon/models';
import { ChassisCard } from '@/features/cards/components/chassis/ChassisCard';
import { Page } from '@/components/nav/Page';
import { CardTradeBtn } from '@/features/cards/components/CardTradeBtn';
import { Price } from '@/components/Price';
import { ChassisCardDetails } from '@/features/cards/components/chassis/ChassisCardDetails';

export const ChassisCardPage: FC<{
  card: IMarketChassisCard;
  userChassisCard?: IUserChassisCard;
}> = ({ card, userChassisCard }) => {
  const { chassis, type, value, id } = card;
  const { name } = chassis;

  return (
    <Page>
      <div className="h-full flex flex-col lg:flex-row lg:justify-center lg:items-center">
        <div className="min-h-[70vh] w-full lg:w-1/2 flex items-center justify-center lg:py-0">
          <div className="w-3/5 sm:w-1/2 md:w-1/3 lg:w-3/5 xl:w-1/2 pl-6">
            <ChassisCard card={card} />
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-full flex flex-col gap-10 lg:overflow-auto p-4 md:p-10">
          <div className="flex flex-col gap-2">
            <p className="text-4xl font-bold">{name}</p>
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-end gap-2">
                <Price
                  value={value}
                  initialAnimate
                  colorAnimation
                  className="text-2xl [&>span]:text-lg"
                />
              </div>
              <CardTradeBtn cardId={id} cardValue={value} resource="chassis" />
            </div>
          </div>

          <ChassisCardDetails card={card} />
        </div>
      </div>
    </Page>
  );
};
