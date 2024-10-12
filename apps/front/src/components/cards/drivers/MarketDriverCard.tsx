import { FC } from 'react';
import { IMarketDriverCard } from '@gordon/models';
import { DriverCard } from './DriverCard';

interface IMarketDriverCardProps {
  card: IMarketDriverCard;
}

export const MarketDriverCard: FC<IMarketDriverCardProps> = ({ card }) => {
  return (
    <div id="driver-market-card" className="flex flex-col gap-2">
      <DriverCard card={card} disableHover />
      <p>{card.value}</p>
    </div>
  );
};
