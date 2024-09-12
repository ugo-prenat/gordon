import { Hono } from 'hono';
import { createDBDriver, getDBDriver, getDBDrivers } from './drivers.db';
import { IInsertDBDriver } from '@controllers/drivers/drivers.schemas';
import { isEmpty } from '@gordon/utils';

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
    const driver = {} as IInsertDBDriver;

    return createDBDriver(driver)
      .then((createdDriver) => {
        return c.json({ msg: 'driver created', driver: createdDriver }, 201);
      })
      .catch((error) => {
        console.error(error);
        return c.json({ error: 'error creating driver' }, 500);
      });
  });
