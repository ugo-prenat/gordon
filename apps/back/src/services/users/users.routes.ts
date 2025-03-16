import { handleError } from '@utils/api.utils';
import { Hono } from 'hono';
import { getDBUser, getDBUsers } from './users.db';
import { APIError } from '@gordon/models';
import { formatUsersToFront, formatUserToFront } from './users.utils';

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
  });
