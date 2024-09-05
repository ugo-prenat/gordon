import { Championship } from './championships.models';

export interface IDriver {
  id: number;
  name: string;
}

export const RACE_RESULTS = [
  'EX', // Excluded
  'WD', // Withdrawn
  'C', // Race cancelled
  'DSQ', // Disqualified
  'PO', // Practiced only
  'DNS', // Did not start
  'DNA', // Did not arrive
  'DNQ', // Did not qualify
  'DNP', // Did not practice
  'DNPQ', // Did not pre-qualify
  'Ret', // Not classified, retired
  'NC', // Not classified, finished
  'TD' // Thursday/Friday test driver (from 2003 onwards)
] as const;

export type RaceResult = number | (typeof RACE_RESULTS)[number];

export const UNWANTED_RESULTS: RaceResult[] = ['C', 'PO', 'TD'] as const;

export interface IDriverRecord {
  year: number;
  team: string;
  result: RaceResult;
  circuitKey: string;
  championship: Championship;
  race: { index: number; key?: 'SPR' | 'FEA'; name?: string };
}

export interface IDriverScrapConf {
  name: string;
  wikiKey: string;
  loadedChampionships: Championship[];
  params?: IDriverScrapConfParams;
}

export interface IDriverScrapConfParams {}
