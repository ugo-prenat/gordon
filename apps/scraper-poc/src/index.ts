import { DRIVERS_SCRAP_CONF } from './scraper.models';
import { fetchWiki, parsePageContent } from './scraper.utils';
import fs from 'fs';

const scrap = () =>
  DRIVERS_SCRAP_CONF.map((conf) =>
    fetchWiki(conf.wikiKey).then((elements) => {
      const records = parsePageContent(elements, conf);

      const filename = `${conf.name.replace(/\s+/g, '-').toLowerCase()}.json`;

      fs.writeFileSync(
        `./records/${filename}`,
        JSON.stringify(records, null, 2)
      );

      console.log(`Records saved to ./records/${filename}`);
      console.log('report: ');
    })
  );

// scrap();
