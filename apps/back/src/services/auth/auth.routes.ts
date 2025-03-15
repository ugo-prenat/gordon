import { createDBUser, getDBUser } from '@services/users/users.db';
import { Hono } from 'hono';
import {
  authRegisterSchema,
  IJwtPayload,
  JWT_EXPIRED_ERROR
} from './auth.models';
import { payloadValidator } from '@middlewares/payloadValidator.middleware';
import { IInsertDBUser } from '@gordon/models';
import { handleError } from '@utils/api.utils';
import { signToken, verifyToken } from './auth.utils';
import { decode } from 'hono/jwt';

export const authRoutes = new Hono()
  .post('/refresh', (c) => {
    const token = c.req.header('Authorization')?.replace('Bearer ', '');
    if (!token)
      return Promise.resolve(
        c.json({ code: 'AUR-1', message: 'No access token provided' }, 401)
      );

    return verifyToken(token)
      .then(() => c.json({ jwt: token }))
      .catch((error) => {
        if (error.name === JWT_EXPIRED_ERROR) {
          const { payload } = decode(token);
          const { sub, role } = payload as IJwtPayload;

          return signToken({ sub, role })
            .then((jwt) => c.json({ jwt }, 201))
            .catch(handleError(c, 'AUR-2', 'Failed to sign a new token'));
        }
        return handleError(c, 'AUR-3', 'Invalid token')(error);
      });
  })

  .post('/register', payloadValidator(authRegisterSchema), (c) => {
    const { id, name } = c.req.valid('json');
    const user: IInsertDBUser = { id, name, role: 'user', isGuest: true };

    return createDBUser(user)
      .then(({ id, role }) =>
        signToken({ sub: id, role })
          .then((jwt) => c.json({ jwt }, 201))
          .catch(handleError(c, 'AUR-4'))
      )
      .catch(handleError(c, 'AUR-5'));
  })

  .get('/checkId/:id', (c) =>
    getDBUser(c.req.param('id'))
      .then((maybeUser) =>
        maybeUser
          ? c.json({ message: 'Id already taken' }, 400)
          : c.json({}, 200)
      )
      .catch(handleError(c, 'AUR-6'))
  );
