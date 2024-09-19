import { Hono } from 'hono';
import { createDBRecords, getDBRecord, getDBRecords } from './records.db';
import { isEmpty } from '@gordon/utils';
import { IInsertDBRecord } from '@gordon/models';

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

  .post('/', (c) => {
    const records: IInsertDBRecord[] = [];

    return createDBRecords(records)
      .then((createdRecords) =>
        c.json({ msg: `created ${createdRecords.length} records` }, 201)
      )
      .catch((error) => {
        console.error(error);
        return c.json({ error: 'error creating records' }, 500);
      });
  });
