import {
  ICompleteDBUserChassisCard,
  ICompleteUserChassisCard
} from '@gordon/models';
import { formatToMarketChassisCard } from '@services/chassisCards/chassisCards.utils';

export const formatUserChassisCardToFront = (
  userChassisCard: ICompleteDBUserChassisCard
): ICompleteUserChassisCard => {
  return {
    ...userChassisCard,
    ownedAt: userChassisCard.ownedAt.toISOString(),
    card: formatToMarketChassisCard(userChassisCard.card)
  };
};
