import { Hono } from 'hono';
import { isEmpty } from '@gordon/utils';
import { createDBDriver, getDBDriver, getDBDrivers } from './drivers.db';
import { IInsertDBDriver } from '@gordon/models';

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

  .post('/', (c) => {
    const driver: IInsertDBDriver = {
      id: 'max-verstappen',
      fullName: 'Max Verstappen',
      wikiKey: 'Max_Verstappen',
      recordedChampionships: ['f1'],
      teamId: 'red-bull',
      tla: 'VER',
      activeChampionship: 'f1',
      pictureUrl: 'vroom',
      nationalityCountryCode: 'NL',
      dateOfBirth: '1997-09-30'
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
