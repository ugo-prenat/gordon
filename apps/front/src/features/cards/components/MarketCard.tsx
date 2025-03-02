import { FC } from 'react';
import { Link } from '@tanstack/react-router';
import { DriverCard } from '@/features/cards/components/drivers/DriverCard';
import { IMarketDriverCard, Resource } from '@gordon/models';
import { Price } from '@/components/typography';

interface IMarketCardProps {
  resource: Resource;
  card: IMarketDriverCard; // IMarketDriverCard | IMarketChassisCard;
}

export const MarketCard: FC<IMarketCardProps> = ({ resource, card }) => {
  const { id, value, valueTrend } = card;
  return (
    <div id={`${resource}-market-card`} className="flex flex-col gap-2">
      <Link to={`/cards/${id}`}>
        <DriverCard card={card} disableHover />
        <div className="flex justify-between mt-2">
          <Price className="text-sm">{value.toLocaleString()}</Price>
          <p>{valueTrend}</p>
        </div>
      </Link>
    </div>
  );
};
