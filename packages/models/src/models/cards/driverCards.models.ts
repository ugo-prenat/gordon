import { Championship, IDriver, ITeam, WithDate } from '../..';
import { DriverCardType } from './cards.models';

export interface IDriverCard {
  id: string;
  driverId: string;
  teamId: string;
  type: DriverCardType;
  picturePath: string;
  description: string | null;
  season: number;
  championship: Championship;
}

export interface IInsertDBDriverCard extends IDriverCard {}

export interface IDBDriverCard extends WithDate<IDriverCard> {}

export interface IMarketDriverCard
  extends Omit<IDriverCard, 'driverId' | 'teamId'> {
  value: number;
  driver: Pick<IDriver, 'id' | 'fullName' | 'nationalityCountryCode'>;
  team: Pick<ITeam, 'id' | 'name' | 'darkLogoPath' | 'lightLogoPath'>;
}
