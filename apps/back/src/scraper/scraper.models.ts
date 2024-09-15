import { Championship } from '@gordon/models';

export const WIKIPEDIA_URL = 'https://en.wikipedia.org/wiki';

export const MAX_YEARS_IN_PAST = 3;

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

export interface IGroupedContent {
  championship: Championship;
  table: IHtmlTag;
}

export interface IRawGroupedContent extends Partial<IGroupedContent> {}

import { IInsertDBDriver } from '@gordon/models';

export const UNUSED_DRIVERS: IInsertDBDriver[] = [
  // {
  //   id: 'Verstappen',
  //   wikiKey: 'Max_Verstappen',
  //   recordedChampionships: ['f1']
  // },
  // {
  //   id: 'Norris',
  //   wikiKey: 'Lando_Norris',
  //   recordedChampionships: ['f1']
  // },
  // {
  //   id: 'Leclerc',
  //   wikiKey: 'Charles_Leclerc',
  //   recordedChampionships: ['f1']
  // },
  // {
  //   id: 'Piastri',
  //   wikiKey: 'Oscar_Piastri',
  //   recordedChampionships: ['f1', 'f2']
  // },
  // {
  //   id: 'Sainz',
  //   wikiKey: 'Carlos_Sainz_Jr.',
  //   recordedChampionships: ['f1']
  // },
  {
    id: 'Hamilton',
    wikiKey: 'Lewis_Hamilton',
    recordedChampionships: ['f1']
  }
  // {
  //   id: 'Perez',
  //   wikiKey: 'Sergio_P%C3%A9rez',
  //   recordedChampionships: ['f1']
  // },
  // {
  //   id: 'Russell',
  //   wikiKey: 'George_Russell_(racing_driver)',
  //   recordedChampionships: ['f1']
  // },
  // {
  //   id: 'Alonso',
  //   wikiKey: 'Fernando_Alonso',
  //   recordedChampionships: ['f1']
  // },
  // {
  //   id: 'Stroll',
  //   wikiKey: 'Lance_Stroll',
  //   recordedChampionships: ['f1']
  // },
  // {
  //   id: 'Hulkenberg',
  //   wikiKey: 'Nico_H%C3%BClkenberg',
  //   recordedChampionships: ['f1']
  // },
  // {
  //   id: 'Tsunoda',
  //   wikiKey: 'Yuki_Tsunoda',
  //   recordedChampionships: ['f1']
  // },
  // {
  //   id: 'Ricciardo',
  //   wikiKey: 'Daniel_Ricciardo',
  //   recordedChampionships: ['f1']
  // },
  // {
  //   id: 'Gasly',
  //   wikiKey: 'Pierre_Gasly',
  //   recordedChampionships: ['f1']
  // },
  // {
  //   id: 'Magnussen',
  //   wikiKey: 'Kevin_Magnussen',
  //   recordedChampionships: ['f1']
  // },
  // {
  //   id: 'Albon',
  //   wikiKey: 'Alex_Albon',
  //   recordedChampionships: ['f1']
  // },
  // {
  //   id: 'Ocon',
  //   wikiKey: 'Esteban_Ocon',
  //   recordedChampionships: ['f1']
  // },
  // {
  //   id: 'Guanyu',
  //   wikiKey: 'Zhou_Guanyu',
  //   recordedChampionships: ['f1']
  // },
  // {
  //   id: 'Colapinto',
  //   wikiKey: 'Franco_Colapinto',
  //   recordedChampionships: ['f1', 'f2']
  // },
  // {
  //   id: 'Bottas',
  //   wikiKey: 'Valtteri_Bottas',
  //   recordedChampionships: ['f1']
  // },
  // {
  //   id: 'Bearman',
  //   wikiKey: 'Oliver_Bearman',
  //   recordedChampionships: ['f1', 'f2']
  // }
] as IInsertDBDriver[];
