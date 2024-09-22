import { Hono } from 'hono';
import { getDBRecord, getDBRecords } from './records.db';
import { isEmpty } from '@gordon/utils';
import { getDBDrivers } from '@services/drivers/drivers.db';
import { scrapRecords } from '@scraper/scraper.actions';
import { createRecords } from './records.utils';

export const recordsRouter = new Hono()
  .get('/', (c) =>
    getDBRecords()
      .then((records) => c.json(records))
      .catch((error) => {
        console.error(error);
        return c.json({ error: 'error getting records' }, 500);
      })
  )

  .get('/:id', (c) =>
    getDBRecord(Number(c.req.param('id')))
      .then((records) =>
        isEmpty(records)
          ? c.json({ error: 'no record found' }, 404)
          : c.json(records[0])
      )
      .catch((error) => {
        console.error(error);
        return c.json({ error: 'error getting record' }, 500);
      })
  )

  .post('/', (c) =>
    getDBDrivers()
      .then(scrapRecords)
      .then(createRecords)
      .then((res) => c.json(res, 201))
      .catch((error) => {
        console.error(error);
        return c.json({ msg: 'error creating records', error }, 500);
      })
  );
