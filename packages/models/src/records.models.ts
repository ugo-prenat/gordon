import { Championship } from './championships.models';

export interface IRecord {
  driverId: string;
  year: number;
  team: string;
  result: RaceResult;
  circuitId: string;
  championship: Championship;
  race: {
    key: RaceKey;
    name?: string;
    round: number; // en fonction de la saison
    index: number; // en fonction du weekend (SPR | FEA)
  };
}

export interface IFlattenedRecord extends Omit<IRecord, 'race'> {
  raceKey: RaceKey;
  raceName?: string;
  raceRound: number;
  raceIndex: number;
}

export interface IInsertDBRecord extends IFlattenedRecord {}
export interface IDBRecord extends IFlattenedRecord {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export type RaceKey = 'SPR' | 'FEA';

// unwanted results:
// C = Race cancelled
// PO = Practiced only
// TD = Thursday/Friday test driver (from 2003 onwards)
export const RACE_RESULTS = [
  'EX', // Excluded
  'WD', // Withdrawn
  'DSQ', // Disqualified
  'DNS', // Did not start
  'DNA', // Did not arrive
  'DNQ', // Did not qualify
  'DNP', // Did not practice
  'DNPQ', // Did not pre-qualify
  'Ret', // Not classified, retired
  'NC' // Not classified, finished
] as const;

export type RaceResult = number | (typeof RACE_RESULTS)[number];
