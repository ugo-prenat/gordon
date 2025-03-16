import { Role } from '@gordon/models';
import { JWTPayload } from 'hono/utils/jwt/types';

export const JWT_EXPIRATION_TIME = 60 * 60; // 1 hour
export const JWT_SECRET = process.env.JWT_SECRET!;
export const JWT_ALGORITHM = 'HS256';
export const JWT_EXPIRED_ERROR = 'JwtTokenExpired';

export interface IJwtPayload extends JWTPayload {
  sub: string; // user id
  role: Role;
}
