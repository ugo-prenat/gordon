import { Championship } from './championships.models';

export interface IDriver {
  id: number;
  fullName: string;
  wikiKey: string;
  activeChampionship: Championship;
  recordedChampionships: Championship[];
}

export interface IAPIDriver extends IDriver {
  createdAt: Date;
  updatedAt: Date;
}
