import { htmlToJson } from '@contentstack/json-rte-serializer';
import { JSDOM } from 'jsdom';
import {
  IHtmlTag,
  TEAM_COLUMN_ID,
  WIKIPEDIA_URL,
  YEAR_COLUMN_ID
} from './scraper.models';
import { IDriverRecord, RACE_RESULTS, RaceResult } from '@gordon/models';
import fs from 'fs';

export const fetchWiki = (wikiKey: string): Promise<IHtmlTag[]> =>
  fetch(`${WIKIPEDIA_URL}/${wikiKey}`)
    .then((res) => res.text())
    .then((html) => {
      const htmlDoc = new JSDOM(html).window.document;
      const jsonValue = htmlToJson(htmlDoc.querySelector('.mw-content-ltr'));

      if (!jsonValue)
        throw new Error(`No data found from page ${WIKIPEDIA_URL}/${wikiKey}`);
      return jsonValue.children;
    });

export const getRacingRecordIndex = (elements: IHtmlTag[]) =>
  elements.findIndex((el) => el?.children?.[0]?.attrs?.id === 'Racing_record');

export const isTableTitle = (el: IHtmlTag) => {
  const firstChild = el.children?.[0];
  const firstGrandChild = firstChild?.children?.[0]?.text;

  if (!firstChild || !firstGrandChild) return false;

  return (
    el?.attrs?.['class-name'] === 'mw-heading mw-heading3' &&
    firstChild.type === 'h3'
  );
};

export const isTable = (el: IHtmlTag) =>
  el.attrs?.['class-name'] === 'wikitable';

export const formatTableTitle = (el: IHtmlTag) =>
  el?.children?.[0]?.children?.[0]?.text
    ?.replace('Complete ', '')
    .replace(' results', '');

export const formatTable = (table: IHtmlTag): IDriverRecord[] => {
  if (table.type !== 'table')
    throw new Error(`Element ${table.type} is not a table`);

  const tbody = table.children?.[0];
  const tableHeaders =
    tbody?.children?.[0]?.children
      ?.map((h) => h.children?.[0]?.text?.replace('\n', '').toLowerCase())
      .filter((el) => el !== undefined) || [];

  const yearColumnIndex = tableHeaders.findIndex(
    (header) => header === YEAR_COLUMN_ID
  );
  const teamColumnIndex = tableHeaders.findIndex(
    (header) => header === TEAM_COLUMN_ID
  );
  const roundsColumnIndexes = tableHeaders
    .map((el, index) => (!isNaN(Number(el)) ? index : undefined))
    .filter((el) => el !== undefined);

  const lines = tbody?.children?.slice(1) || [];

  const records = roundsColumnIndexes.map((roundIndex) =>
    lines.map((line) => {
      const raceCell = line.children?.[roundIndex]?.children;
      const raceData = raceCell?.[0]?.children?.filter(
        (el) => el.text !== '\n'
      );
      const result = getRaceResult(raceCell?.pop());

      const raceKey = raceData?.[1]?.text === 'SPR' ? 'SPR' : 'FEA';
      const raceIndex =
        raceKey === 'SPR'
          ? 0
          : raceKey === 'FEA'
            ? 1
            : Number(raceData?.[1]?.text);

      const record: Partial<IDriverRecord> = {
        race: {
          key: raceKey,
          index: raceIndex,
          name: getRedactorTitle(raceCell?.[0])
        },
        circuitKey: raceData?.[0]?.text,
        result,
        year: getYear(line, yearColumnIndex),
        team: getTeam(line, teamColumnIndex) || ''
      };

      // if (roundIndex === 2) {
      //   // console.log({ raceData, raceResult });
      //   console.log(record);
      // }

      return record;
    })
  );

  console.log(JSON.stringify(records, null, 2));

  return [];
};

const getYear = (el: IHtmlTag, yearColumnIndex: number) =>
  Number(el.children?.[yearColumnIndex]?.children?.[0]?.children?.[0]?.text);

const getTeam = (el: IHtmlTag, teamColumnIndex: number) =>
  getRedactorTitle(el.children?.[teamColumnIndex]?.children?.[0]) ||
  el.children?.[teamColumnIndex]?.children?.[0]?.children?.[0]?.text;

const getRedactorTitle = (el: IHtmlTag | undefined): string | undefined =>
  (el?.attrs?.['redactor-attributes'] as { title?: string })?.title;

const getRaceResult = (el: IHtmlTag | undefined): RaceResult | undefined => {
  if (!el || !el.text) return undefined;

  return RACE_RESULTS.includes(el.text as (typeof RACE_RESULTS)[number])
    ? (el.text as RaceResult)
    : Number(el.text);
};

export const parsePageContent = (elements: IHtmlTag[]) => {
  const racingRecordIndex = getRacingRecordIndex(elements);
  console.log({ racingRecordIndex });

  const formatted = elements
    .filter((_, index) => index > racingRecordIndex)
    .map((el, index) => {
      if (isTableTitle(el))
        return {
          title: formatTableTitle(el)
        };
      if (isTable(el)) return { records: formatTable(el) };
    })
    .filter((el) => el !== undefined);

  console.log(formatted);
  // console.log(JSON.stringify(formatted, null, 2));

  fs.writeFileSync('output.json', JSON.stringify(formatted, null, 2));
};
