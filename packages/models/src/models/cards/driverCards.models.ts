import { Championship, IDriver, ITeam, WithDate } from '../..';
import { CardType } from './cards.models';

export interface IDriverCard {
  id: string;
  driverId: string;
  teamId: string;
  type: CardType;
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
  driver: Pick<
    IDriver,
    'id' | 'fullName' | 'nationalityCountryCode' | 'dateOfBirth'
  >;
  team: Pick<ITeam, 'id' | 'name' | 'darkLogoPath' | 'lightLogoPath'>;
}
