import { IDriverScrapConf } from '@gordon/models';

export const WIKIPEDIA_URL = 'https://en.wikipedia.org/wiki';

export const UNWANTED_TABLE_IDS = ['Macau Grand Prix'];

export const DRIVERS_SCRAP_CONF: IDriverScrapConf[] = [
  // { name: 'Victor Martins', wikiKey: 'Victor_Martins', tableIds: [] },
  // { name: 'Max Verstappen', wikiKey: 'Max_Verstappen', tableIds: [] },
  { name: 'Roman Staněk', wikiKey: 'Roman_Stan%C4%9Bk', tableIds: [] }
];

export interface IHtmlTag {
  uid?: string;
  type?: string;
  text?: string;
  children?: IHtmlTag[];
  attrs?: { [key: string]: unknown };
  [key: string]: unknown;
}
