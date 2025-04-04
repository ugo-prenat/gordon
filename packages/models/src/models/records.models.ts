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
  avgScore: number | null;
  race: {
    key: RaceKey;
    name: string | null;
    countryCode: string;
    round: number; // en fonction de la saison
    index: number; // en fonction du weekend (SPR | FEA)
  };
}

export interface IFlattenedRecord
  extends Omit<IRecord, 'race' | 'score' | 'avgScore'> {
  score: string;
  avgScore: string | null;
  raceKey: RaceKey;
  raceName: string | null;
  raceRound: number;
  raceIndex: number;
  raceCountryCode: string;
}

export interface IInsertDBRecord extends Omit<IFlattenedRecord, 'id'> {}

export interface IDBRecord extends WithDate<IFlattenedRecord> {}

export type WithDBRecord<T> = T & { record: IDBRecord };

export type RaceKey = 'SPR' | 'FEA';

// unwanted results:
// WD = Withdrawn
// C = Race cancelled
// PO = Practiced only
// TD = Thursday/Friday test driver (from 2003 onwards)
// DNS = Did not start
// DNQ = Did not qualify
// DNP = Did not practice
// DNPQ = Did not pre-qualify
export const RACE_RESULTS = [
  'EX', // Excluded
  'DSQ', // Disqualified
  'DNA', // Did not arrive
  'Ret', // Not classified, retired
  'NC' // Not classified, finished
] as const;

export type RaceResult = number | (typeof RACE_RESULTS)[number];
