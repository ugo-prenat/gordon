import { WithDate } from '../types/types';
import { Championship } from './championships.models';

export interface IRecord {
  id: number;
  driverId: string;
  year: number;
  team: string;
  result: RaceResult;
  circuitId: string;
  championship: Championship;
  score: number;
  race: {
    key: RaceKey;
    name: string | null;
    countryCode: string | null;
    round: number; // en fonction de la saison
    index: number; // en fonction du weekend (SPR | FEA)
  };
}

export interface IFlattenedRecord extends Omit<IRecord, 'race' | 'score'> {
  score: string;
  raceKey: RaceKey;
  raceName: string | null;
  raceRound: number;
  raceIndex: number;
  raceCountryCode: string | null;
}

export interface IInsertDBRecord extends Omit<IFlattenedRecord, 'id'> {}

export interface IDBRecord extends WithDate<IFlattenedRecord> {}

export type RaceKey = 'SPR' | 'FEA';

// unwanted results:
// C = Race cancelled
// PO = Practiced only
// TD = Thursday/Friday test driver (from 2003 onwards)
// DNS = Did not start
// DNQ = Did not qualify
// DNP = Did not practice
// DNPQ = Did not pre-qualify
export const RACE_RESULTS = [
  'EX', // Excluded
  'WD', // Withdrawn
  'DSQ', // Disqualified
  'DNA', // Did not arrive
  'Ret', // Not classified, retired
  'NC' // Not classified, finished
] as const;

export type RaceResult = number | (typeof RACE_RESULTS)[number];
