import { Hono } from 'hono';
import { createDBDriver, getDBDriver, getDBDrivers } from './drivers.db';
import {
  APIError,
  CardTypeWithValues,
  DriverCardsValuesTimeRange,
  IInsertDBDriver
} from '@gordon/models';
import { getDBRecordsByDriverId } from '@services/records/records.db';
import { dbRecordsToRecords } from '@services/records/records.utils';
import { formatToFront, handleError } from '@utils/api.utils';
import { getDBDriverCardsValues } from '@services/driverCardsValues/driverCardsValues.db';
import {
  dbDriverCardsValuesToFrontDriverCardsValues,
  filterDriverCardsValuesByTimeRange
} from '@services/driverCardsValues/driverCardsValues.utils';

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
        if (!driver) throw new APIError('no driver found', 'DRR-3', 404);
        return c.json(formatToFront(driver), 200);
      })
      .catch(handleError(c, 'DRR-4'))
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
    const range = c.req.query('range') as
      | DriverCardsValuesTimeRange
      | undefined;

    return getDBDriverCardsValues({ driverId, type })
      .then(filterDriverCardsValuesByTimeRange(range))
      .then(dbDriverCardsValuesToFrontDriverCardsValues)
      .then((values) => c.json(values, 200))
      .catch(handleError(c, 'DRR-6'));
  })

  .post('/', async (c) => {
    const body: IInsertDBDriver[] = await c.req.json();

    return createDBDriver(body)
      .then((drivers) => c.json({ drivers }, 201))
      .catch(handleError(c, 'DRR-7'));
  });
