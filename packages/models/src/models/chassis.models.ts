import { WithDate } from '../types/types';
import { Championship } from './championships.models';

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
