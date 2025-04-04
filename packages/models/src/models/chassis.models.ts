import { WithDate } from '../types/types';
import { Championship } from './championships.models';
import { ITeam } from './teams.models';

export interface IChassis {
  id: string;
  name: string;
  teamId: string;
  season: number;
  championship: Championship;
  picturePath: string;
}

export interface IInsertDBChassis extends IChassis {}

export interface IDBChassis extends WithDate<IChassis> {}

export type WithChassis<T> = T & { chassis: IChassis };

export interface IMarketChassis extends Omit<IChassis, 'teamId'> {
  team: Pick<ITeam, 'id' | 'name' | 'darkLogoPath' | 'lightLogoPath'>;
}
