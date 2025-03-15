import { handleError } from '@utils/api.utils';
import { Hono } from 'hono';
import { createDBUser, getDBUser, getDBUsers } from './users.db';
import { APIError, IInsertDBUser } from '@gordon/models';
import {
  buildGuestUserId,
  formatUsersToFront,
  formatUserToFront
} from './users.utils';

export const usersRoutes = new Hono()
  .get('/', (c) =>
    getDBUsers()
      .then((users) => c.json(formatUsersToFront(users), 200))
      .catch(handleError(c, 'USR-1'))
  )

  .get('/:id', (c) => {
    const id = c.req.param('id');
    return getDBUser(id)
      .then((user) => {
        if (!user) throw new APIError('User not found', 'USR-2', 404);
        return c.json(formatUserToFront(user), 200);
      })
      .catch(handleError(c, 'USR-3'));
  })

  .post('/', async (c) => {
    const body: { isGuest: boolean; id?: string; name?: string } =
      await c.req.json();

    const id = body.id || buildGuestUserId();
    const user: IInsertDBUser = {
      id,
      role: 'user',
      isGuest: body.isGuest,
      name: body.name || id
    };

    return createDBUser(user)
      .then((users) => c.json(users, 201))
      .catch(handleError(c, 'USR-4'));
  });
