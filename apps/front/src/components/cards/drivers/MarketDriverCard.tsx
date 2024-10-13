import { FC } from 'react';
import { IMarketDriverCard } from '@gordon/models';
import { DriverCard } from './DriverCard';
import { Link } from '@tanstack/react-router';

interface IMarketDriverCardProps {
  card: IMarketDriverCard;
}

export const MarketDriverCard: FC<IMarketDriverCardProps> = ({ card }) => {
  return (
    <div id="driver-market-card" className="flex flex-col gap-2">
      <Link to={`/cards/${card.id}`} className="w-full">
        <DriverCard card={card} disableHover />
        <p>{card.value}</p>
      </Link>
    </div>
  );
};
