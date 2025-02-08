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
  avgScore: number;
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
  avgScore: string;
  raceKey: RaceKey;
  raceName: string | null;
  raceRound: number;
  raceIndex: number;
  raceCountryCode: string;
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

export const CIRCUIT_COUNTRY_MAPPING: {
  countryCode: string;
  wikiCircuitIds: string[];
}[] = [
  { countryCode: 'US', wikiCircuitIds: ['MIA', 'LVG'] },
  { countryCode: 'IT', wikiCircuitIds: ['EMI', 'IMO', 'MNZ'] },
  { countryCode: 'MC', wikiCircuitIds: ['MON'] },
  { countryCode: 'NL', wikiCircuitIds: ['NED', 'ZAN'] },
  { countryCode: 'SG', wikiCircuitIds: ['SIN'] },
  { countryCode: 'MX', wikiCircuitIds: ['MXC'] },
  { countryCode: 'BR', wikiCircuitIds: ['SAP'] },
  { countryCode: 'AE', wikiCircuitIds: ['ABU', 'YMC'] },
  { countryCode: 'AU', wikiCircuitIds: ['MEL'] },
  { countryCode: 'SA', wikiCircuitIds: ['JED'] },
  { countryCode: 'ES', wikiCircuitIds: ['CAT'] },
  { countryCode: 'AT', wikiCircuitIds: ['RBR'] },
  { countryCode: 'GB', wikiCircuitIds: ['SIL'] },
  { countryCode: 'BE', wikiCircuitIds: ['SPA'] },
  { countryCode: 'AZ', wikiCircuitIds: ['BAK'] },
  { countryCode: 'QA', wikiCircuitIds: ['LSL'] }
];
