import { Hono } from 'hono';
import { isEmpty } from '@gordon/utils';
import { createDBDriver, getDBDriver, getDBDrivers } from './drivers.db';
import { IInsertDBDriver } from '@gordon/models';
import { getDBRecordsByDriverId } from '@controllers/records/records.db';
import { dbRecordsToRecords } from '@controllers/records/records.utils';

export const driversRouter = new Hono()
  .get('/', (c) =>
    getDBDrivers()
      .then((drivers) => c.json(drivers))
      .catch((error) => {
        console.error(error);
        return c.json({ error: 'error getting drivers' }, 500);
      })
  )

  .get('/:id', (c) =>
    getDBDriver(c.req.param('id'))
      .then((drivers) =>
        isEmpty(drivers)
          ? c.json({ error: 'no driver found' }, 404)
          : c.json(drivers[0])
      )
      .catch((error) => {
        console.error(error);
        return c.json({ error: 'error getting driver' }, 500);
      })
  )

  .get('/:id/records', (c) => {
    const driverId = c.req.param('id');
    return getDBRecordsByDriverId(driverId)
      .then((records) =>
        c.json({
          total: records.length,
          records: dbRecordsToRecords(records)
        })
      )
      .catch((error) => {
        console.error(error);
        return c.json({ error: 'error getting records' }, 500);
      });
  })

  .post('/', (c) => {
    const driver: IInsertDBDriver = {
      id: 'pierre-gasly',
      fullName: 'Pierre Gasly',
      tla: 'GAS',
      wikiKey: 'Pierre_Gasly',
      activeChampionship: 'f1',
      recordedChampionships: ['f1'],
      pictureUrl: 'vroom',
      nationalityCountryCode: 'FR',
      dateOfBirth: '1996-02-07',
      isActive: true
    };

    return createDBDriver(driver)
      .then((createdDriver) => {
        return c.json({ msg: 'driver created', driver: createdDriver }, 201);
      })
      .catch((error) => {
        console.error(error);
        return c.json({ error: 'error creating driver' }, 500);
      });
  });
