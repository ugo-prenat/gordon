import { htmlToJson } from '@contentstack/json-rte-serializer';
import { JSDOM } from 'jsdom';
import {
  IHtmlTag,
  IGroupedContent,
  IRawGroupedContent,
  TEAM_COLUMN_ID,
  WIKIPEDIA_URL,
  YEAR_COLUMN_ID,
  TRGRP_TYPE_NAME,
  MAX_YEARS_IN_PAST
} from './scraper.models';
import {
  Championship,
  IRecord,
  RACE_RESULTS,
  RaceResult,
  CHAMPIONSHIPS_CONF,
  IInsertDBRecord,
  IFlattenedRecord,
  CHAMPIONSHIPS_TOTAL_DRIVERS
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

      const maybeNestedTable = el.children?.find(isTable);
      if (maybeNestedTable)
        return { table: maybeNestedTable, championship: undefined };
      return null;
    })
    .filter((el) => el !== null);

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

    const lines = extractLines(tbody);

    const records = lines
      .map((line) =>
        roundsColumnIndexes.map((roundIndex, index) => {
          const year = getYear(line, yearColumnIndex);
          const maxYear = new Date().getFullYear() - MAX_YEARS_IN_PAST;

          const raceCell = line.children?.[roundIndex]?.children;
          const raceData = raceCell?.[0]?.children?.filter(
            (el) => el.text !== '\n'
          );

          const resultTags = raceCell?.filter((el) => el.text !== '\n');
          const result = getRaceResult(resultTags?.[1]);
          const { raceKey, raceIndex, raceRound } = getRaceData(
            raceData,
            championship,
            index + 1
          );

          if (!result) return null;
          if (year < maxYear) return null;

          const record: IFlattenedRecord = {
            year,
            result,
            driverId,
            championship,
            raceKey,
            raceIndex,
            raceRound,
            raceName: getRedactorTitle(raceCell?.[0]),
            score: calculateScore(result, championship),
            circuitId: raceData?.[0]?.text!,
            team: getTeam(line, teamColumnIndex) || ''
          };
          return record;
        })
      )
      .flat()
      .filter((el) => el !== null);

    return records;
  };

const extractLines = (tbody: IHtmlTag | undefined) => {
  const { yearColumnIndex, teamColumnIndex } = parseTableHeaders(tbody);
  const lines = tbody?.children?.slice(1) || [];

  return lines
    .map((line) => {
      if (line.type !== TRGRP_TYPE_NAME) return line;
      if (!line.children) return null;

      const yearCell = line.children?.[0]?.children?.[yearColumnIndex];
      const teamCell = line.children?.[0]?.children?.[teamColumnIndex];

      if (!yearCell || !teamCell) return null;

      return line.children.map((tr) => {
        const children = tr.children?.slice(0) || [];
        children[yearColumnIndex] = yearCell;

        const team = getTeam(tr, teamColumnIndex);
        if (!team) children[teamColumnIndex] = teamCell;

        return { ...tr, children };
      });
    })
    .filter((el) => el !== null)
    .flat();
};

const calculateScore = (
  result: RaceResult,
  championship: Championship
): number => {
  const totalDriversInChampionship = CHAMPIONSHIPS_TOTAL_DRIVERS[championship];

  if (typeof result === 'number') {
    const points = 100 - (90 * (result - 1)) / (totalDriversInChampionship - 1);
    return Math.max(10, Math.round(points * 100) / 100);
  }
  return 5;
};

const getRaceData = (
  el: IHtmlTag[] | undefined,
  championship: Championship,
  roundIndex: number
): Pick<IFlattenedRecord, 'raceKey' | 'raceIndex' | 'raceRound'> =>
  championship === 'f1'
    ? { raceKey: 'FEA', raceIndex: 0, raceRound: roundIndex }
    : el?.[1]?.text === 'SPR'
      ? { raceKey: 'SPR', raceIndex: 0, raceRound: Math.ceil(roundIndex / 2) }
      : { raceKey: 'FEA', raceIndex: 1, raceRound: Math.ceil(roundIndex / 2) };

const getRacingRecordIndex = (elements: IHtmlTag[]) =>
  elements.findIndex((el) => el?.children?.[0]?.attrs?.id === 'Racing_record');

const isTableTitle = (el: IHtmlTag) => {
  const firstChild = el.children?.[0];
  const firstGrandChild = firstChild?.children?.[0]?.text;

  if (!firstChild || !firstGrandChild) return false;
  return ['h3', 'h4'].includes(firstChild.type || '');
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
