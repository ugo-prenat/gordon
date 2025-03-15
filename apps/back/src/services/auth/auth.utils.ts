import { IUser } from '@gordon/models';
import { JWT_ALGORITHM, JWT_SECRET } from './auth.models';
import { JWT_EXPIRATION_TIME } from './auth.models';
import { sign, verify } from 'hono/jwt';

export const signToken = ({ id, role }: IUser) => {
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    role,
    sub: id,
    iat: now,
    iss: 'gordon',
    exp: now + JWT_EXPIRATION_TIME
  };
  return sign(payload, JWT_SECRET, JWT_ALGORITHM);
};

export const verifyToken = (token: string) =>
  verify(token, JWT_SECRET, JWT_ALGORITHM);
