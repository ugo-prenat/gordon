import { WithDate } from '../types/types';

export interface IChassis {
  id: string;
  name: string;
  teamId: string;
  year: number;
  picturePath: string;
}

export interface IInsertDBChassis extends IChassis {}

export interface IDBChassis extends WithDate<IChassis> {}
