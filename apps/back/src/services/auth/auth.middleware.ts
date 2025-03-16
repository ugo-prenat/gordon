import { Context, Next } from 'hono';
import { verifyToken } from './auth.utils';
import { handleError } from '@utils/api.utils';
import { JWT_EXPIRED_ERROR } from './auth.models';

export const authMiddleware = async (c: Context, next: Next) => {
  if (c.req.path.startsWith('/auth')) return next();

  const token = c.req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return c.json({ code: 'AUTH-1', message: 'Unauthorized' }, 401);

  return verifyToken(token)
    .then((decoded) => {
      c.set('jwtPayload', decoded);
      return next();
    })
    .catch((error) =>
      error.name === JWT_EXPIRED_ERROR
        ? handleError(c, 'AUTH-2', 'Expired token', 403)(error)
        : handleError(c, 'AUTH-3', 'Invalid token', 401)(error)
    );
};
