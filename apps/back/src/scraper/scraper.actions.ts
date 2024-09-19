import { IDriver, IInsertDBRecord } from '@gordon/models';
import { buildRecords, fetchWiki, parsePageContent } from './scraper.utils';
import fs from 'fs';
import path from 'path';

export const scrapRecords = (
  drivers: IDriver[]
): Promise<IInsertDBRecord[][]> => Promise.all(drivers.map(getDriverRecords));

const getDriverRecords = ({ wikiKey, recordedChampionships, id }: IDriver) =>
  fetchWiki(wikiKey).then((elements) => {
    const parsedRecords = parsePageContent(elements, recordedChampionships);
    return buildRecords(parsedRecords, id);
  });

export const saveRecords = (records: IInsertDBRecord[], id: string) => {
  const filename = `${id.replace(/\s+/g, '-').toLowerCase()}.json`;

  const exportDir = './exports';
  if (!fs.existsSync(exportDir)) fs.mkdirSync(exportDir, { recursive: true });

  fs.writeFileSync(
    path.join(exportDir, filename),
    JSON.stringify(records, null, 2)
  );

  console.log(`Records saved to ./exports/${filename}`);
};
