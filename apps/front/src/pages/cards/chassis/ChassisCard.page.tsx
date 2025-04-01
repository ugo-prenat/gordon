import { FC } from 'react';
import { IMarketChassisCard, IUserChassisCard } from '@gordon/models';

export const ChassisCardPage: FC<{
  card: IMarketChassisCard;
  userChassisCard?: IUserChassisCard;
}> = ({ card, userChassisCard }) => {
  const { chassis, type, value, id } = card;
  const { name } = chassis;

  return <div>{name}</div>;
};
