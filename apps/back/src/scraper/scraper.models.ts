import { Championship } from '@gordon/models';

export const WIKIPEDIA_URL = 'https://en.wikipedia.org/wiki';

export const YEAR_COLUMN_ID = 'year';
export const TEAM_COLUMN_ID = 'entrant';

export interface IHtmlTag {
  uid?: string;
  type?: string;
  text?: string;
  children?: IHtmlTag[];
  attrs?: { [key: string]: unknown };
  [key: string]: unknown;
}

export interface IGroupedContent {
  championship: Championship;
  table: IHtmlTag;
}

export interface IRawGroupedContent extends Partial<IGroupedContent> {}
