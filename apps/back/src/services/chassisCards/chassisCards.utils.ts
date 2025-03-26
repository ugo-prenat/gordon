import { ICompleteDBChassisCard } from '@gordon/models';

import { IMarketChassisCard } from '@gordon/models';
import { formatToMarketChassis } from '@services/chassis/chassis.utils';

export const formatToMarketChassisCards = (
  chassisCards: ICompleteDBChassisCard[]
): IMarketChassisCard[] => chassisCards.map(formatToMarketChassisCard);

export const formatToMarketChassisCard = (
  chassisCard: ICompleteDBChassisCard
): IMarketChassisCard => {
  const { chassisId, createdAt, ...card } = chassisCard;
  const chassis = formatToMarketChassis(chassisCard.chassis);

  return { ...card, chassis, multiplier: +card.multiplier };
};
