import { IMarketChassisCard } from '@gordon/models';
import { Link } from '@tanstack/react-router';
import { FC } from 'react';

export const ChassisMarketCard: FC<{ card: IMarketChassisCard }> = ({
  card
}) => {
  const { id, chassis } = card;
  return (
    <div id="driver-market-card" className="flex flex-col gap-2">
      <Link to={`/cards/${id}`}>
        <p>{chassis.name}</p>
      </Link>
    </div>
  );
};
