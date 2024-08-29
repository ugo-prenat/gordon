import { DRIVERS_SCRAP_CONF } from './scraper.models';
import { fetchWiki, parsePageContent } from './scraper.utils';

const scrap = () =>
  DRIVERS_SCRAP_CONF.map(({ name, wikiKey, tableIds }) =>
    fetchWiki(wikiKey).then(parsePageContent)
  );

// scrap();
