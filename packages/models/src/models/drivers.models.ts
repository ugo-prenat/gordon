import { WithDate } from '../types/types';
import { Championship } from './championships.models';

export interface IDriver {
  id: string;
  firstName: string;
  lastName: string;
  tla: string;
  value: number;
  teamId: string;
  wikiKey: string;
  activeChampionship: Championship;
  recordedChampionships: Championship[];
  picturePath: string;
  numberLogoPath: string | null;
  nationalityCountryCode: string;
  dateOfBirth: string;
  isActive: boolean;
}

export interface IInsertDBDriver extends Omit<IDriver, 'value'> {}

export interface IDBDriver extends WithDate<IDriver> {}

export type WithDriver<T> = T & { driver: IDriver };
