export interface IDriver {
  id: number;
  name: string;
}

export type RaceResult =
  | number
  | 'NC' // Not classified, finished
  | 'Ret' // Not classified, retired
  | 'DNQ' // Did not qualify
  | 'DNPQ' // Did not pre-qualify
  | 'DSQ' // Disqualified
  | 'DNS' // Did not start
  | 'C' // Race cancelled
  | 'PO' // Practiced only
  | 'TD' // Thursday/Friday test driver (from 2003 onwards)
  | 'DNP' // Did not practice
  | 'EX' // Excluded
  | 'DNA' // Did not arrive
  | 'WD'; // Withdrawn

export interface IDriverRecord {
  year: number;
  team: string;
  result: RaceResult;
  circuitKey: string;
  championship: string;
  race: { round: number; name?: string };
}

export interface IDriverScrapConf {
  name: string;
  wikiKey: string;
  tableIds: string[];
  params?: IDriverScrapConfParams;
}

export interface IDriverScrapConfParams {}
