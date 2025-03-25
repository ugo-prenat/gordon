import { Hono } from 'hono';
import { createDBChassis, getDBChassis, getDBChassisById } from './chassis.db';
import { APIError, IInsertDBChassis } from '@gordon/models';
import { formatToFront, handleError } from '@utils/api.utils';

export const chassisRouter = new Hono()
  .onError((e, c) => handleError(c, 'CHR-1')(e))

  .get('/', (c) =>
    getDBChassis()
      .then((chassis) => c.json(formatToFront(chassis), 200))
      .catch(handleError(c, 'CHR-2'))
  )

  .get('/:id', (c) =>
    getDBChassisById(c.req.param('id'))
      .then((chassis) => {
        if (!chassis) throw new APIError('no chassis found', 'CHR-3', 404);
        return c.json(formatToFront(chassis), 200);
      })
      .catch(handleError(c, 'CHR-4'))
  )

  .post('/', async (c) => {
    const body: IInsertDBChassis[] = await c.req.json();

    return createDBChassis(body)
      .then((chassis) => c.json({ chassis }, 201))
      .catch(handleError(c, 'CHR-5'));
  });
