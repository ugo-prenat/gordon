import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { IUser } from '@gordon/models';

interface IAuthStore {
  user: IUser | null;
  accessToken: string | null;
  setUser: (user: IUser) => void;
  setAccessToken: (token: string) => void;
  logout: () => void;
}

export const useAuth = create<IAuthStore>()(
  devtools((set) => ({
    user: temptUser,
    accessToken: tempToken,

    setUser: (user) => set({ user }),
    setAccessToken: (token) => set({ accessToken: token }),

    logout: () => set({ user: null })
  }))
);

const temptUser: IUser = {
  id: 'ougo',
  email: 'ougou@gmail.com',
  name: 'ougo dev',
  pictureUrl: 'vroom'
};

const tempToken = "c'est safe";

export const getAccessToken = () => useAuth.getState().accessToken;
export const getUser = () => useAuth.getState().user;
