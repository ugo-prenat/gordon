import { FC } from 'react';
import { Link } from '@tanstack/react-router';
import { DriverCard } from '@/features/cards/components/drivers/DriverCard';
import { IMarketDriverCard, Resource } from '@gordon/models';

interface IMarketCardProps {
  resource: Resource;
  card: IMarketDriverCard; // IMarketDriverCard | IMarketChassisCard;
}

export const MarketCard: FC<IMarketCardProps> = ({ resource, card }) => {
  return (
    <div id={`${resource}-market-card`} className="flex flex-col gap-2">
      <Link to={`/cards/${card.id}`}>
        <DriverCard card={card} disableHover />
        <p>{card.value}</p>
      </Link>
    </div>
  );
};
