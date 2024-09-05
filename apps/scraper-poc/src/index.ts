import { DRIVERS_SCRAP_CONF } from './scraper.models';
import {
  fetchWiki,
  filterUnWantedResults,
  parsePageContent
} from './scraper.utils';
import fs from 'fs';

const scrap = () =>
  DRIVERS_SCRAP_CONF.map((conf) =>
    fetchWiki(conf.wikiKey).then((elements) => {
      const records = parsePageContent(elements, conf);
      const filteredRecords = filterUnWantedResults(records);

      const filename = `${conf.name.replace(/\s+/g, '-').toLowerCase()}.json`;

      fs.writeFileSync(
        `./records/${filename}`,
        JSON.stringify(filteredRecords, null, 2)
      );

      console.log(`Records saved to ./records/${filename}`);
      console.log('report: ');
    })
  );

//   charles leclerc
//  - bien parser les 18† -> monza F2

// Verstappen
//  - sao paulo 2022 -> 6 puissance 4

// scrap();
