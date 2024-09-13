import { Championship } from './championships.models';

export interface IRecord {
  id: number;
  driverId: string;
  year: number;
  team: string;
  result: RaceResult;
  circuitId: string;
  championship: Championship;
  race: {
    name: string;
    key: RaceKey;
    round: number; // en fonction de la saison
    index: number; // en fonction du weekend (SPR,FEA,...)
  };
}

export type RaceKey = 'SPR' | 'FEA';

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

export const UNWANTED_RESULTS: RaceResult[] = ['C', 'PO', 'TD'];

export interface IDriverScrapConf {
  name: string;
  wikiKey: string;
  loadedChampionships: Championship[];
  params?: IDriverScrapConfParams;
}

export interface IDriverScrapConfParams {}
