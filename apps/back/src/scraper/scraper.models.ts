import { IDriverScrapConf } from '@gordon/models';

export const WIKIPEDIA_URL = 'https://en.wikipedia.org/wiki';

export const YEAR_COLUMN_ID = 'year';
export const TEAM_COLUMN_ID = 'entrant';

export const DRIVERS_SCRAP_CONF: IDriverScrapConf[] = [
  // {
  //   name: 'Roman Staněk',
  //   wikiKey: 'Roman_Stan%C4%9Bk',
  //   loadedChampionships: ['FIA Formula 2']
  // },
  // {
  //   name: 'Victor Martins',
  //   wikiKey: 'Victor_Martins',
  //   loadedChampionships: ['FIA Formula 2', 'FIA Formula 3']
  // },
  // {
  //   name: 'Max Verstappen',
  //   wikiKey: 'Max_Verstappen',
  //   loadedChampionships: ['Formula One']
  // },
  {
    name: 'Charles Leclerc',
    wikiKey: 'Charles_Leclerc',
    loadedChampionships: ['Formula One', 'FIA Formula 2']
  }
];

export interface IHtmlTag {
  uid?: string;
  type?: string;
  text?: string;
  children?: IHtmlTag[];
  attrs?: { [key: string]: unknown };
  [key: string]: unknown;
}
