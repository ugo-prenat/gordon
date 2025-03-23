import { Hono } from 'hono';
import { createDBRecords, getDBRecord, getDBRecords } from './records.db';
import { getDBDrivers } from '@services/drivers/drivers.db';
import { notify, scrapRecords } from '@scraper/scraper.actions';
import { dbRecordsToRecords, dbRecordToRecord } from './records.utils';
import { handleError } from '@utils/api.utils';
import { APIError } from '@gordon/models';
import { updateDriverCardsValues } from '@services/driverCardsValues/driverCardsValues.utils';
import { updateDriverCardsFromValues } from '@services/driverCards/driverCards.utils';
import { isEmpty } from '@gordon/utils';

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

  .post('/', (c) => {
    const { role } = c.get('jwtPayload');

    if (role !== 'admin')
      return c.json(
        { code: 'RER-5', message: 'Unauthorized', status: 401 },
        401
      );

    // return db
    //   .execute(
    //     sql`TRUNCATE TABLE "public"."records", "public"."driver_cards_values"`
    //   )
    // .then(() => getDBDrivers())
    return getDBDrivers()
      .then((drivers) =>
        scrapRecords(drivers).then((records) =>
          createDBRecords(records).then((insertedRecords) => {
            if (isEmpty(insertedRecords)) {
              //notify
              return c.text('no records inserted' as string, 201);
            }
            // notify
            return updateDriverCardsValues(insertedRecords).then(
              (cardsValues) =>
                updateDriverCardsFromValues(cardsValues).then(() =>
                  c.text('created' as string, 201)
                )
            );
          })
        )
      )
      .catch((e) => {
        // notify error
        return handleError(c, 'RER-6')(e);
      });
  })

  .post('/notify', (c) =>
    notify()
      .then(() => c.json('notified', 201))
      .catch(handleError(c, 'RER-7'))
  );
