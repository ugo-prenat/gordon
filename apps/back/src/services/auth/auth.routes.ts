import { createDBUser, getDBUser } from '@services/users/users.db';
import { Hono } from 'hono';
import { IJwtPayload, JWT_EXPIRED_ERROR } from './auth.models';
import { payloadValidator } from '@middlewares/payloadValidator.middleware';
import { IInsertDBUser, userRegistrationSchema } from '@gordon/models';
import { handleError } from '@utils/api.utils';
import { signToken, verifyToken } from './auth.utils';
import { decode } from 'hono/jwt';
import { formatUserToFront } from '@services/users/users.utils';
import { StatusCode } from 'hono/utils/http-status';

export const authRoutes = new Hono()
  .onError((e, c) => handleError(c, 'AUR-1')(e))

  .get('/', (c) => {
    const token = c.req.header('Authorization')?.replace('Bearer ', '');
    if (!token)
      return Promise.resolve(
        c.json(
          {
            code: 'AUR-2',
            message: 'No access token provided',
            status: 401 as StatusCode
          },
          401
        )
      );

    const { payload } = decode(token);
    const { sub } = payload as IJwtPayload;

    return getDBUser(sub)
      .then((user) =>
        user
          ? c.json(formatUserToFront(user), 200)
          : c.json(
              {
                code: 'AUR-3',
                message: 'No user found',
                status: 404 as StatusCode
              },
              404
            )
      )
      .catch(handleError(c, 'AUR-4'));
  })

  .post('/refresh', (c) => {
    const token = c.req.header('Authorization')?.replace('Bearer ', '');
    if (!token)
      return Promise.resolve(
        c.json(
          { code: 'AUR-5', message: 'No access token provided', status: 401 },
          401
        )
      );

    return verifyToken(token)
      .then(() => c.json({ jwt: token }))
      .catch((error) => {
        if (error.name === JWT_EXPIRED_ERROR) {
          const { payload } = decode(token);
          const { sub, role } = payload as IJwtPayload;

          return signToken({ sub, role })
            .then((jwt) => c.json({ jwt }, 201))
            .catch(handleError(c, 'AUR-6'));
        }
        return handleError(c, 'AUR-7', 'Invalid token')(error);
      });
  })

  .post('/register', payloadValidator(userRegistrationSchema), (c) => {
    const { id, name } = c.req.valid('json');
    const user: IInsertDBUser = { id, name, role: 'user', isGuest: true };

    return createDBUser(user)
      .then(({ id, role }) =>
        signToken({ sub: id, role })
          .then((jwt) => c.json({ jwt }, 201))
          .catch(handleError(c, 'AUR-8'))
      )
      .catch(handleError(c, 'AUR-9'));
  })

  .get('/checkId/:id', (c) =>
    getDBUser(c.req.param('id'))
      .then((maybeUser) =>
        maybeUser
          ? c.json({ message: 'Id already taken' }, 400)
          : c.json({}, 200)
      )
      .catch(handleError(c, 'AUR-10'))
  );
