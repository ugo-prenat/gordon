import { Championship } from './championships.models';

export interface IDriver {
  id: string;
  fullName: string;
  tla: string;
  wikiKey: string;
  activeChampionship: Championship;
  recordedChampionships: Championship[];
  pictureUrl: string;
  nationalityCountryCode: string;
  dateOfBirth: string;
  isActive: boolean;
}

export interface IInsertDBDriver extends IDriver {}

export interface IDBDriver extends IDriver {
  createdAt: Date;
  updatedAt: Date;
}
