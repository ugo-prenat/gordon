import { z } from 'zod';

export const USER_ROLE = 'user' as const;
export const ADMIN_ROLE = 'admin' as const;

export const ROLES = [USER_ROLE, ADMIN_ROLE] as const;
export type Role = (typeof ROLES)[number];

export interface IBaseUser {
  id: string;
  role: Role;
  name: string;
  credits: number;
  picturePath: string;
  lastLogin: Date;
}

export interface IGuestUser extends IBaseUser {
  isGuest: true;
}

export interface ISignedUser extends IBaseUser {
  isGuest: false;
  email: string;
  password: string;
}

export type IUser = IGuestUser | ISignedUser;

export type IFrontUser = Omit<IUser, 'password'>;

export type IInsertDBUser = Omit<
  IUser,
  'picturePath' | 'credits' | 'lastLogin'
>;

export type IDBUser = IUser;

export const userRegistrationSchema = z.object({
  id: z
    .string()
    .min(2, { message: 'register.error.id.min' })
    .max(30, { message: 'register.error.id.max' })
    .regex(/^[a-zA-Z0-9_-]+$/, {
      message: 'register.error.id.specialChars'
    }),
  name: z
    .string()
    .min(2, { message: 'register.error.name.min' })
    .max(30, { message: 'register.error.name.max' })
});

export type RegistrationUser = z.infer<typeof userRegistrationSchema>;
