export interface IDriver {
  id: number;
  name: string;
}

export interface IDriverRecord {
  year: number;
  team: string;
  result: string;
  circuitAbbr: string;
  championship: string;
  race: { index: number; name?: string };
}

export interface IDriverScrapConf {
  name: string;
  wikiKey: string;
  tableIds: string[];
  params?: IDriverScrapConfParams;
}

export interface IDriverScrapConfParams {}
