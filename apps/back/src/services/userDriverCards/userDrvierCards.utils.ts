import {
  ICompleteDBUserDriverCard,
  ICompleteUserDriverCard
} from '@gordon/models';
import { formatToMarketDriverCard } from '@services/driverCards/driverCards.utils';

export const formatUserDriverCardToFront = (
  userDriverCard: ICompleteDBUserDriverCard
): ICompleteUserDriverCard => {
  return {
    ...userDriverCard,
    ownedAt: userDriverCard.ownedAt.toISOString(),
    card: formatToMarketDriverCard(userDriverCard.card)
  };
};
