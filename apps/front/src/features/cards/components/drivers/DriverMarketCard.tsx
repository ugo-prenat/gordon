import { FC } from 'react';
import { Link } from '@tanstack/react-router';
import { DriverCard } from '@/features/cards/components/drivers/DriverCard';
import { IMarketDriverCard } from '@gordon/models';
import { Price } from '@/components/Price';
import { ValueTrendBadge } from '@/features/values/components/ValueTrendBadge';

export const DriverMarketCard: FC<{ card: IMarketDriverCard }> = ({ card }) => {
  const { id, value, valueTrend } = card;
  return (
    <div id="driver-market-card" className="flex flex-col gap-2">
      <Link to={`/cards/${id}`}>
        <DriverCard card={card} disableHover />
        <div className="flex justify-between mt-2">
          <Price value={value} percentage={valueTrend} />
          <ValueTrendBadge trend={valueTrend} />
        </div>
      </Link>
    </div>
  );
};
