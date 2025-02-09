import { Hono } from 'hono';
import { createDBDriver, getDBDriver, getDBDrivers } from './drivers.db';
import { APIError, CardTypeWithValues, IInsertDBDriver } from '@gordon/models';
import { getDBRecordsByDriverId } from '@services/records/records.db';
import { dbRecordsToRecords } from '@services/records/records.utils';
import { formatToFront, handleError } from '@utils/api.utils';
import { getDBDriverCardsValues } from '@services/driverCardsValues/driverCardsValues.db';
import { dbDriverCardsValuesToFrontDriverCardsValues } from '@services/driverCardsValues/driverCardsValues.utils';

export const driversRouter = new Hono()
  .onError((e, c) => handleError(c, 'DRR-1')(e))

  .get('/', (c) =>
    getDBDrivers()
      .then((drivers) => c.json(formatToFront(drivers), 200))
      .catch(handleError(c, 'DRR-2'))
  )

  .get('/:id', (c) =>
    getDBDriver(c.req.param('id'))
      .then((driver) => {
        if (!driver) throw new APIError('no driver found', 'DRR-4', 404);
        return c.json(formatToFront(driver), 200);
      })
      .catch(handleError(c, 'DRR-3'))
  )

  .get('/:id/records', (c) => {
    const driverId = c.req.param('id');
    return getDBRecordsByDriverId(driverId)
      .then((records) => c.json(dbRecordsToRecords(records), 200))
      .catch(handleError(c, 'DRR-5'));
  })

  .get('/:id/values', (c) => {
    const driverId = c.req.param('id');
    const type = c.req.query('type') as CardTypeWithValues | undefined;

    return getDBDriverCardsValues({ driverId, type })
      .then((values) =>
        c.json(dbDriverCardsValuesToFrontDriverCardsValues(values), 200)
      )
      .catch(handleError(c, 'DRR-6'));
  })

  .post('/', async (c) => {
    const body: IInsertDBDriver = await c.req.json();

    return createDBDriver(body)
      .then((createdDriver) => c.json({ driver: createdDriver }, 201))
      .catch(handleError(c, 'DRR-7'));
  });
