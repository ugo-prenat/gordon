import { IDriver } from '@gordon/models';
import { buildRecords, fetchWiki, parsePageContent } from './scraper.utils';
import { IDriverWithRecords } from '@controllers/records/records.models';

export const scrapRecords = (
  drivers: IDriver[]
): Promise<IDriverWithRecords[]> => Promise.all(drivers.map(getDriverRecords));

const getDriverRecords = (driver: IDriver): Promise<IDriverWithRecords> =>
  fetchWiki(driver.wikiKey).then((elements) => {
    const { recordedChampionships, id } = driver;

    const parsedRecords = parsePageContent(elements, recordedChampionships);
    const records = buildRecords(parsedRecords, id);

    console.log(`${driver.id} - ${records.length} records found`);
    return { driver, records };
  });
