import { Context, Next } from 'hono';
import { verifyToken } from './auth.utils';
import { handleError } from '@utils/api.utils';

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
      handleError(c, 'AUTH-2', 'Token expired or invalid')(error)
    );
};
