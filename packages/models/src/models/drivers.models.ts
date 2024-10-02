import { WithDate } from '../types/types';
import { Championship } from './championships.models';

export interface IDriver {
  id: string;
  fullName: string;
  tla: string;
  value: number;
  wikiKey: string;
  activeChampionship: Championship;
  recordedChampionships: Championship[];
  pictureUrl: string;
  numberLogoUrl: string | null;
  nationalityCountryCode: string;
  dateOfBirth: string;
  isActive: boolean;
}

export interface IInsertDBDriver extends Omit<IDriver, 'value'> {}

export interface IDBDriver extends WithDate<IDriver> {}
