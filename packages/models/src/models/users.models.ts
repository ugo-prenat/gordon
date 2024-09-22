export type Role = 'user' | 'admin' | 'owner';

export interface IUser {
  id: string;
  email: string;
  name: string;
  pictureUrl: string;
}

// add lastLogin
