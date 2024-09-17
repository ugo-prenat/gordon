import { Championship } from './championships.models';

export interface IDriver {
  id: string;
  fullName: string;
  tla: string;
  value: number;
  valueTrend: number;
  wikiKey: string;
  activeChampionship: Championship;
  recordedChampionships: Championship[];
  pictureUrl: string;
  nationalityCountryCode: string;
  dateOfBirth: string;
  isActive: boolean;
}

export interface IInsertDBDriver
  extends Omit<IDriver, 'value' | 'valueTrend'> {}

export interface IDBDriver extends IDriver {
  createdAt: Date;
  updatedAt: Date;
}
