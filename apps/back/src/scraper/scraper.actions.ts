import { IDriver, IInsertDBRecord } from '@gordon/models';
import { buildRecords, fetchWiki, parsePageContent } from './scraper.utils';
import fs from 'fs';
import path from 'path';
import { IDriverWithRecords } from '@controllers/records/records.models';

export const scrapRecords = (
  drivers: IDriver[]
): Promise<IDriverWithRecords[]> => Promise.all(drivers.map(getDriverRecords));

const getDriverRecords = (driver: IDriver): Promise<IDriverWithRecords> =>
  fetchWiki(driver.wikiKey).then((elements) => {
    const { recordedChampionships, id } = driver;

    const parsedRecords = parsePageContent(elements, recordedChampionships);
    const records = buildRecords(parsedRecords, id);
    return { driver, records };
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
