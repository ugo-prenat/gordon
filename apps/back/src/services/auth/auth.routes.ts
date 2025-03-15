import { createDBUser, getDBUser } from '@services/users/users.db';
import { Hono } from 'hono';
import { authRegisterSchema } from './auth.models';
import { payloadValidator } from '@middlewares/payloadValidator.middleware';
import { IInsertDBUser } from '@gordon/models';
import { handleError } from '@utils/api.utils';
import { signToken } from './auth.utils';

export const authRoutes = new Hono()
  .post('/login', (c) => {
    return c.json({ message: 'Hello login' });
  })

  .post('/register', payloadValidator(authRegisterSchema), (c) => {
    const { id, name } = c.req.valid('json');
    const user: IInsertDBUser = { id, name, role: 'user', isGuest: true };

    return createDBUser(user)
      .then((user) => signToken(user).then((jwt) => c.json({ jwt }, 201)))
      .catch(handleError(c, 'AUR-2'));
  })

  .get('/checkId/:id', (c) =>
    getDBUser(c.req.param('id'))
      .then((maybeUser) =>
        maybeUser
          ? c.json({ message: 'Id already taken' }, 400)
          : c.json({}, 200)
      )
      .catch(handleError(c, 'AUR-3'))
  );
