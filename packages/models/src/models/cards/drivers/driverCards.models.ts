import { Championship, IDriver, ITeam, WithDate } from '../../..';
import { CardType } from '../cards.models';

export interface IDriverCard {
  id: string;
  driverId: string;
  teamId: string;
  type: CardType;
  picturePath: string;
  description: string | null;
  season: number;
  championship: Championship;
  value: number;
  valueTrend: string;
}

export interface IInsertDBDriverCard
  extends Omit<IDriverCard, 'id' | 'value' | 'valueTrend'> {}

export interface IDBDriverCard extends WithDate<IDriverCard> {}

export interface IMarketDriverCard
  extends Omit<IDriverCard, 'driverId' | 'teamId' | 'valueTrend'> {
  valueTrend: number;
  driver: Pick<
    IDriver,
    'id' | 'firstName' | 'lastName' | 'nationalityCountryCode' | 'dateOfBirth'
  >;
  team: Pick<ITeam, 'id' | 'name' | 'darkLogoPath' | 'lightLogoPath'>;
}
