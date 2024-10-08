export type Role = 'user' | 'admin' | 'owner';

export interface IUser {
  id: string;
  email: string;
  name: string;
  picturePath: string;
}

// add lastLogin
