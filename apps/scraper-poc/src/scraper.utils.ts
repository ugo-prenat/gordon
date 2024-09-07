import { htmlToJson } from '@contentstack/json-rte-serializer';
import { JSDOM } from 'jsdom';
import {
  IHtmlTag,
  TEAM_COLUMN_ID,
  WIKIPEDIA_URL,
  YEAR_COLUMN_ID
} from './scraper.models';
import {
  Championship,
  IDriverRecord,
  IDriverScrapConf,
  RACE_RESULTS,
  UNWANTED_RESULTS,
  RaceResult
} from '@gordon/models';

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
    .replace('Championship', '')
    .replace(' results', '')
    .trim();

export const formatTable = (
  table: IHtmlTag,
  championship: Championship
): IDriverRecord[] => {
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

  const records = lines
    .map((line) =>
      roundsColumnIndexes.map((roundIndex) => {
        const raceCell = line.children?.[roundIndex]?.children;
        const raceData = raceCell?.[0]?.children?.filter(
          (el) => el.text !== '\n'
        );

        const resultTags = raceCell?.filter((el) => el.text !== '\n');
        const result = getRaceResult(resultTags?.[1]);

        if (!result) return null;

        const raceKey = raceData?.[1]?.text === 'SPR' ? 'SPR' : 'FEA';
        const raceIndex =
          raceKey === 'SPR'
            ? 0
            : raceKey === 'FEA'
              ? 1
              : Number(raceData?.[1]?.text);

        const record: IDriverRecord = {
          race: {
            key: raceKey,
            index: raceIndex,
            name: getRedactorTitle(raceCell?.[0])
          },
          circuitKey: raceData?.[0]?.text!,
          championship,
          result,
          year: getYear(line, yearColumnIndex),
          team: getTeam(line, teamColumnIndex) || ''
        };

        return record;
      })
    )
    .flat()
    .filter((el) => el !== null);

  return records;
};

const getYear = (el: IHtmlTag, yearColumnIndex: number) =>
  Number(el.children?.[yearColumnIndex]?.children?.[0]?.children?.[0]?.text);

const getTeam = (el: IHtmlTag, teamColumnIndex: number) =>
  getRedactorTitle(el.children?.[teamColumnIndex]?.children?.[0]) ||
  el.children?.[teamColumnIndex]?.children?.[0]?.children?.[0]?.text;

const getRedactorTitle = (el: IHtmlTag | undefined): string | undefined =>
  (el?.attrs?.['redactor-attributes'] as { title?: string })?.title;

const getRaceResult = (el: IHtmlTag | undefined): RaceResult | undefined => {
  if (!el || !el.text || el.text === '') return undefined;

  const text = el.text.replace('†', '');

  return RACE_RESULTS.includes(text as (typeof RACE_RESULTS)[number])
    ? (text as RaceResult)
    : !isNaN(Number(text))
      ? Number(text)
      : undefined;
};

export const parsePageContent = (
  elements: IHtmlTag[],
  driverConf: IDriverScrapConf
): IDriverRecord[] => {
  const racingRecordIndex = getRacingRecordIndex(elements);

  const formatted = elements
    .filter((_, index) => index > racingRecordIndex)
    .map((el, index) => {
      if (isTableTitle(el))
        return {
          table: undefined,
          title: formatTableTitle(el)
        };
      if (isTable(el)) return { table: el, title: undefined };

      return undefined;
    })
    .filter((el) => el !== undefined);

  const grouped = filterUnwantedRecords(
    groupTablesAndTitles(formatted),
    driverConf.loadedChampionships
  );

  return grouped;
};

const groupTablesAndTitles = (
  elements: {
    title?: string;
    table?: IHtmlTag;
  }[]
): IDriverRecord[] =>
  elements
    .map((curr, index, array) => {
      if (curr?.title) {
        const nextElement = array[index + 1];
        if (nextElement?.table)
          return formatTable(nextElement.table, curr.title as Championship);
      }
      return [];
    })
    .flat();

const filterUnwantedRecords = (
  records: IDriverRecord[],
  wantedChampionships: Championship[]
) =>
  records.filter(({ championship }) =>
    wantedChampionships.some((champ) => championship.includes(champ))
  );

export const filterUnWantedResults = (records: IDriverRecord[]) =>
  records.filter(({ result }) => !UNWANTED_RESULTS.includes(result));
