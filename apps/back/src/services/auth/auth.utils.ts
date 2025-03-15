import { IJwtPayload, JWT_ALGORITHM, JWT_SECRET } from './auth.models';
import { JWT_EXPIRATION_TIME } from './auth.models';
import { sign, verify } from 'hono/jwt';

export const signToken = ({ sub, role }: IJwtPayload) => {
  const now = Math.floor(Date.now() / 1000);
  const payload: IJwtPayload = {
    sub,
    role,
    iat: now,
    iss: 'gordon',
    exp: now + JWT_EXPIRATION_TIME
  };
  return sign(payload, JWT_SECRET, JWT_ALGORITHM);
};

export const verifyToken = (token: string) =>
  verify(token, JWT_SECRET, JWT_ALGORITHM);
