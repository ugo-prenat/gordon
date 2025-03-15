import { Role, USER_ID_REGEX } from '@gordon/models';
import { JWTPayload } from 'hono/utils/jwt/types';
import { z } from 'zod';

export const JWT_EXPIRATION_TIME = 60 * 60; // 1 hour
export const JWT_SECRET = process.env.JWT_SECRET!;
export const JWT_ALGORITHM = 'HS256';
export const JWT_EXPIRED_ERROR = 'JwtTokenExpired';

export interface IJwtPayload extends JWTPayload {
  sub: string; // user id
  role: Role;
}

export const authRegisterSchema = z.object({
  id: z.string().regex(USER_ID_REGEX),
  name: z.string().min(2).max(30)
});
