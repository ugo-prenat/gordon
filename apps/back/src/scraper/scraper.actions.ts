import { IDriver } from '@gordon/models';
import {
  buildRecords,
  fetchWiki,
  parsePageContent,
  saveRecords
} from './scraper.utils';

export const scrapRecords = (drivers: IDriver[]) =>
  drivers.map(({ wikiKey, recordedChampionships, id }) =>
    fetchWiki(wikiKey).then((elements) => {
      const parsedContent = parsePageContent(elements, recordedChampionships);
      const flattenedRecords = buildRecords(parsedContent, id);
      // const records = flattenedRecordsToRecords(flattenedRecords);

      saveRecords(flattenedRecords, id);
    })
  );
