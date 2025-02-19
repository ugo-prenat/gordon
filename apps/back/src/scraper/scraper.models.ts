import { Championship } from '@gordon/models';

export const WIKIPEDIA_URL = 'https://en.wikipedia.org/wiki';

export const MAX_YEARS_IN_PAST = 2;

export const YEAR_COLUMN_ID = 'year';
export const TEAM_COLUMN_ID = 'entrant';
export const TRGRP_TYPE_NAME = 'trgrp';

export interface IHtmlTag {
  uid?: string;
  type?: string;
  text?: string;
  children?: IHtmlTag[];
  attrs?: { [key: string]: unknown };
  [key: string]: unknown;
}

export interface IChampionshipTable {
  championship: Championship;
  table: IHtmlTag;
}

export interface IRawChampionshipTable extends Partial<IChampionshipTable> {}

export const RECORDS_WINDOW_SIZE = 10;
export const MAX_RECORD_SCORE = 100;
