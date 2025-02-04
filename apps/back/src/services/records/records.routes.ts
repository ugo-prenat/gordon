import { Hono } from 'hono';
import { getDBRecord, getDBRecords } from './records.db';
import { getDBDrivers } from '@services/drivers/drivers.db';
import { notify, scrapRecords } from '@scraper/scraper.actions';
import {
  createRecords,
  dbRecordsToRecords,
  dbRecordToRecord
} from './records.utils';
import { handleError } from '@utils/api.utils';
import { APIError } from '@gordon/models';

export const recordsRouter = new Hono()
  .onError((e, c) => handleError(c, 'RER-1')(e))

  .get('/', (c) =>
    getDBRecords()
      .then((records) => c.json(dbRecordsToRecords(records), 200))
      .catch(handleError(c, 'RER-2'))
  )

  .get('/:id', (c) =>
    getDBRecord(Number(c.req.param('id')))
      .then((record) => {
        if (!record) throw new APIError('no record found', 'RER-3', 404);
        return c.json(dbRecordToRecord(record), 200);
      })
      .catch(handleError(c, 'RER-4'))
  )

  .post('/', (c) =>
    getDBDrivers({ championships: ['f3'] })
      .then(scrapRecords)
      .then(createRecords)
      .then((res) => c.json(res, 201))
      .catch(handleError(c, 'RER-5'))
  )

  .post('/notify', (c) =>
    notify()
      .then(() => c.json('notified', 201))
      .catch(handleError(c, 'RER-6'))
  );
