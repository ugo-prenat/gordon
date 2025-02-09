import { htmlToJson } from '@contentstack/json-rte-serializer';
import { JSDOM } from 'jsdom';
import {
  IHtmlTag,
  IChampionshipTable,
  IRawChampionshipTable,
  TEAM_COLUMN_ID,
  WIKIPEDIA_URL,
  YEAR_COLUMN_ID,
  TRGRP_TYPE_NAME,
  MAX_YEARS_IN_PAST,
  RECORDS_WINDOW_SIZE
} from './scraper.models';
import {
  Championship,
  RACE_RESULTS,
  RaceResult,
  CHAMPIONSHIPS_CONF,
  IInsertDBRecord,
  IFlattenedRecord,
  CHAMPIONSHIPS_TOTAL_DRIVERS,
  CIRCUIT_COUNTRY_MAPPING
} from '@gordon/models';
import countries from 'i18n-iso-countries';
import { isEmpty, roundNum } from '@gordon/utils';

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
): IChampionshipTable[] => {
  const ungroupedElements: IRawChampionshipTable[] = elements
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
  championshipsTables: IChampionshipTable[],
  driverId: string
): IInsertDBRecord[] =>
  championshipsTables.map(buildChampionshipRecords(driverId)).flat();

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

const buildChampionshipRecords =
  (driverId: string) =>
  (championshipTable: IChampionshipTable): IInsertDBRecord[] => {
    const partialRecords = buildPartialRecords(driverId, championshipTable);
    const records = buildRecordsAvgScore(partialRecords);
    return records;
  };

const buildPartialRecords = (
  driverId: string,
  { championship, table }: IChampionshipTable
): Omit<IInsertDBRecord, 'avgScore'>[] => {
  if (table.type !== 'table')
    throw new Error(`Element ${table.type} is not a table`);

  const tbody = table.children?.[0];
  const { yearColumnIndex, teamColumnIndex, roundsColumnIndexes } =
    parseTableHeaders(tbody);

  const lines = extractLines(tbody);

  return lines
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
        const circuitId = raceData?.[0]?.text!;

        if (!result) return null;
        if (year < maxYear) return null;

        const raceCountryCode = getRaceCountryCode(circuitId, driverId, year);

        const score = calculateScore(result, championship);

        const record: Omit<IInsertDBRecord, 'avgScore'> = {
          year,
          score,
          result,
          driverId,
          championship,
          raceKey,
          raceIndex,
          raceRound,
          raceCountryCode,
          raceName: getRedactorTitle(raceCell?.[0]),
          team: getTeam(line, teamColumnIndex) || '',
          circuitId
        };
        return record;
      })
    )
    .flat()
    .filter((el) => el !== null);
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
): string => {
  // Calculates a score between 10 and 100 based on race position
  // For numeric results:
  // - P1 gets 100 points
  // - Last place gets 10 points
  // - Other positions are scaled linearly between 100 and 10
  // For non-numeric results (DNF, DNS etc), returns 0 points
  const totalDriversInChampionship = CHAMPIONSHIPS_TOTAL_DRIVERS[championship];

  if (typeof result === 'number') {
    const points = 100 - (90 * (result - 1)) / (totalDriversInChampionship - 1);
    return roundNum(Math.max(10, points)).toString();
  }
  return '0.00';
};

const buildRecordsAvgScore = (
  records: Omit<IInsertDBRecord, 'avgScore'>[]
): IInsertDBRecord[] =>
  records.reduce<{ records: IInsertDBRecord[]; prevScores: number[] }>(
    (acc, record) => {
      const avgScore = calculateAvgScore(acc.prevScores);
      const newRecords = [...acc.records, { ...record, avgScore }];

      const slicedPrevScores = [...acc.prevScores, +record.score].slice(
        -RECORDS_WINDOW_SIZE + 1
      );

      return { records: newRecords, prevScores: slicedPrevScores };
    },
    { records: [], prevScores: [] }
  ).records;

const calculateAvgScore = (prevScores: number[]) => {
  if (isEmpty(prevScores)) return null;

  const avgScore =
    prevScores.reduce((sum, s) => sum + s, 0) /
    Math.min(prevScores.length, RECORDS_WINDOW_SIZE);

  return roundNum(avgScore).toString();
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

const getRedactorTitle = (el: IHtmlTag | undefined): string | null =>
  (el?.attrs?.['redactor-attributes'] as { title?: string })?.title || null;

const getRaceCountryCode = (
  circuitId: string,
  driverId: string,
  year: number
): string => {
  const code = countries.alpha3ToAlpha2(circuitId);
  if (code) return code;

  const mappedCode = CIRCUIT_COUNTRY_MAPPING.find(({ wikiCircuitIds }) =>
    wikiCircuitIds.includes(circuitId)
  )?.countryCode;

  if (!mappedCode)
    throw new Error(
      `No country code found for circuit id ${circuitId} (${driverId} ${year}), populate CIRCUIT_COUNTRY_MAPPING`
    );

  return mappedCode;
};

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
  elements: IRawChampionshipTable[]
): IChampionshipTable[] =>
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
