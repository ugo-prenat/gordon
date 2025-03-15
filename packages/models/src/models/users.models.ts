export const USER_ROLE = 'user' as const;
export const ADMIN_ROLE = 'admin' as const;

export const ROLES = [USER_ROLE, ADMIN_ROLE] as const;
export type Role = (typeof ROLES)[number];

export const USER_ID_REGEX = /^[a-zA-Z0-9_-]{2,30}$/;

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
