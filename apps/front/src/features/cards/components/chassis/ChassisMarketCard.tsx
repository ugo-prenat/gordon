import { Price } from '@/components/Price';
import { IMarketChassisCard } from '@gordon/models';
import { Link } from '@tanstack/react-router';
import { FC } from 'react';
import { ChassisCard } from './ChassisCard';

export const ChassisMarketCard: FC<{ card: IMarketChassisCard }> = ({
  card
}) => {
  const { id, multiplier, value } = card;
  return (
    <div id="driver-market-card" className="flex flex-col gap-2">
      <Link to={`/cards/${id}`}>
        <ChassisCard card={card} disableHover />
        <div className="flex justify-between mt-2">
          <Price value={value} percentage={0} />
          <p>x{multiplier}</p>
        </div>
      </Link>
    </div>
  );
};
