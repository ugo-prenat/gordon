import {
  ICompleteDBUserChassisCard,
  ICompleteDBUserDriverCard,
  IUserTeam
} from '@gordon/models';
import { formatUserChassisCardToFront } from '@services/userChassisCards/userChassisCards.utils';
import { formatUserDriverCardToFront } from '@services/userDriverCards/userDrvierCards.utils';

export const buildUserTeam = (
  userDriverCards: ICompleteDBUserDriverCard[],
  userChassisCards: ICompleteDBUserChassisCard[]
): IUserTeam => ({
  driverCards: userDriverCards.map(formatUserDriverCardToFront),
  chassisCards: userChassisCards.map(formatUserChassisCardToFront)
});
