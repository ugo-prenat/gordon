import { Hono } from 'hono';
import { createDBDriver, getDBDriver, getDBDrivers } from './drivers.db';
import { APIError, IInsertDBDriver } from '@gordon/models';
import { getDBRecordsByDriverId } from '@services/records/records.db';
import { dbRecordsToRecords } from '@services/records/records.utils';
import { formatToFront, handleError } from '@utils/api.utils';

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

  .post('/', (c) => {
    const driver: IInsertDBDriver = {
      id: 'andrea-kimi-antonelli',
      firstName: 'Andrea',
      lastName: 'Kimi Antonelli',
      tla: 'ANT',
      teamId: 'prema-racing',
      wikiKey: 'Andrea_Kimi_Antonelli',
      activeChampionship: 'f2',
      recordedChampionships: ['f2'],
      dateOfBirth: '2006-08-25',
      nationalityCountryCode: 'ITA',
      picturePath: '/v1728813492/andrea_kimi_antonelli_24_rtthoe.png',
      numberLogoPath: null,
      isActive: true
    };

    return createDBDriver(driver)
      .then((createdDriver) => c.json({ driver: createdDriver }, 201))
      .catch(handleError(c, 'DRR-6'));
  });
