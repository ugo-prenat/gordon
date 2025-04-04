import { ICompleteUserChassisCard } from './cards/chassis/userChassisCards.models';
import { ICompleteUserDriverCard } from './cards/drivers/userDriverCards.models';

export interface IUserTeam {
  driverCards: ICompleteUserDriverCard[];
  chassisCards: ICompleteUserChassisCard[];
}
