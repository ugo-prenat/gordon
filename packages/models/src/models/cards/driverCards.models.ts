import { WithDate } from '../..';
import { DriverCardType } from './cards.models';

export interface IDriverCard {
  id: string;
  driverId: string;
  teamName: string;
  type: DriverCardType;
  picturePath: string;
  description: string | null;
  season: number;
}

export interface IInsertDBDriverCard extends IDriverCard {}

export interface IDBDriverCard extends WithDate<IDriverCard> {}
