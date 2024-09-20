import { Hono } from 'hono';
import { createDBRecords, getDBRecord, getDBRecords } from './records.db';
import { isEmpty } from '@gordon/utils';
import { getDBDrivers } from '@controllers/drivers/drivers.db';
import { scrapRecords } from '@scraper/scraper.actions';

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
      .then((drivers) => scrapRecords(drivers))
      .then((records) => {
        console.log(`found ${records.length} records`);
        return createDBRecords(records);
      })
      .then((ids) =>
        c.json({ msg: `Successfully created ${ids.length} records` }, 201)
      )
      .catch((error) => {
        console.error(error);
        return c.json({ msg: 'error creating records', error }, 500);
      })
  );
