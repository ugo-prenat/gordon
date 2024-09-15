import { htmlToJson } from '@contentstack/json-rte-serializer';
import { JSDOM } from 'jsdom';
import {
  IHtmlTag,
  IGroupedContent,
  IRawGroupedContent,
  TEAM_COLUMN_ID,
  WIKIPEDIA_URL,
  YEAR_COLUMN_ID,
  TRGRP_TYPE_NAME
} from './scraper.models';
import {
  Championship,
  IRecord,
  RACE_RESULTS,
  RaceResult,
  CHAMPIONSHIPS_CONF,
  IInsertDBRecord,
  IFlattenedRecord
} from '@gordon/models';
import fs from 'fs';
import path from 'path';

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

export const parsePageContent = (
  elements: IHtmlTag[],
  wantedChampionships: Championship[]
): IGroupedContent[] => {
  const ungroupedElements: IRawGroupedContent[] = elements
    .filter((_, index) => index > getRacingRecordIndex(elements))
    .map((el) => {
      if (isTableTitle(el)) {
        const championship = getMaybeChampionship(el, wantedChampionships);
        if (!championship) return null;
        return { championship, table: undefined };
      }
      if (isTable(el)) return { table: el, championship: undefined };
      return null;
    })
    .filter((el) => el !== null);

  console.log(ungroupedElements);

  return groupTablesAndTitles(ungroupedElements);
};

export const buildRecords = (
  groupedContents: IGroupedContent[],
  driverId: string
): IInsertDBRecord[] => groupedContents.map(formatTable(driverId)).flat();

const getMaybeChampionship = (
  el: IHtmlTag,
  wantedChampionships: Championship[]
): Championship | undefined => {
  const championship = getChampionshipFromWikiName(
    el?.children?.[0]?.children?.[0]?.text
  );
  if (!championship) return undefined;
  if (wantedChampionships.includes(championship)) return championship;
  return undefined;
};

const formatTable =
  (driverId: string) =>
  ({ championship, table }: IGroupedContent): IInsertDBRecord[] => {
    if (table.type !== 'table')
      throw new Error(`Element ${table.type} is not a table`);

    const tbody = table.children?.[0];
    const { yearColumnIndex, teamColumnIndex, roundsColumnIndexes } =
      parseTableHeaders(tbody);

    const lines = extractLines(tbody, yearColumnIndex);

    const records = lines
      .map((line) =>
        roundsColumnIndexes.map((roundIndex) => {
          const raceCell = line.children?.[roundIndex]?.children;
          const raceData = raceCell?.[0]?.children?.filter(
            (el) => el.text !== '\n'
          );

          const raceKey = raceData?.[1]?.text === 'SPR' ? 'SPR' : 'FEA';
          const resultTags = raceCell?.filter((el) => el.text !== '\n');
          const result = getRaceResult(resultTags?.[1]);

          if (!result) return null;

          const record: IFlattenedRecord = {
            result,
            raceKey,
            driverId,
            championship,
            raceIndex: 0, // temp value
            raceRound: 0, // temp value
            raceName: getRedactorTitle(raceCell?.[0]),
            circuitId: raceData?.[0]?.text!,
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

const extractLines = (tbody: IHtmlTag | undefined, yearColumnIndex: number) =>
  (tbody?.children?.slice(1) || [])
    .map((line) => {
      if (line.type !== TRGRP_TYPE_NAME) return line;
      if (!line.children) return null;

      const yearCell = line.children?.[0]?.children?.[yearColumnIndex];
      if (!yearCell) return null;

      return line.children.map((tr) => {
        const children = tr.children?.slice(0) || [];
        children[yearColumnIndex] = yearCell;
        return { ...tr, children };
      });
    })
    .filter((el) => el !== null)
    .flat();

const getRacingRecordIndex = (elements: IHtmlTag[]) =>
  elements.findIndex((el) => el?.children?.[0]?.attrs?.id === 'Racing_record');

const isTableTitle = (el: IHtmlTag) => {
  const firstChild = el.children?.[0];
  const firstGrandChild = firstChild?.children?.[0]?.text;

  if (!firstChild || !firstGrandChild) return false;
  return (
    firstChild.type === 'h3' &&
    el?.attrs?.['class-name'] === 'mw-heading mw-heading3'
  );
};

const isTable = (el: IHtmlTag) => el.attrs?.['class-name'] === 'wikitable';

const parseTableHeaders = (tbody: IHtmlTag | undefined) => {
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

  return { yearColumnIndex, teamColumnIndex, roundsColumnIndexes };
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

const groupTablesAndTitles = (
  elements: IRawGroupedContent[]
): IGroupedContent[] =>
  elements
    .map((curr, index, array) => {
      const nextElement = array[index + 1];
      return curr?.championship && nextElement?.table
        ? { championship: curr.championship, table: nextElement.table }
        : null;
    })
    .filter((el) => el !== null);

const getChampionshipFromWikiName = (
  wikiName: string | undefined
): Championship | undefined =>
  wikiName
    ? Object.values(CHAMPIONSHIPS_CONF).find((champ) =>
        wikiName.toLowerCase().includes(champ.wikiName.toLowerCase())
      )?.championship
    : undefined;

export const saveRecords = (records: IRecord[], id: string) => {
  const filename = `${id.replace(/\s+/g, '-').toLowerCase()}.json`;

  const exportDir = './exports';
  if (!fs.existsSync(exportDir)) fs.mkdirSync(exportDir, { recursive: true });

  fs.writeFileSync(
    path.join(exportDir, filename),
    JSON.stringify(records, null, 2)
  );

  console.log(`Records saved to ./exports/${filename}`);
};
