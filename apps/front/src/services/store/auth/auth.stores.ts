import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { IUser } from '@gordon/models';

interface IAuthStore {
  user: IUser;
  isAuthenticated: boolean;
  authenticateUser: (user: IUser) => void;
  logout: () => void;
}

const virginUser: IUser = {
  id: '',
  name: '',
  credits: 0,
  role: 'user',
  isGuest: true,
  picturePath: '',
  lastLogin: new Date()
};

export const useAuthStore = create<IAuthStore>()(
  devtools((set) => ({
    user: virginUser,
    isAuthenticated: false,
    authenticateUser: (user) => set({ user, isAuthenticated: true }),
    logout: () => set({ user: virginUser, isAuthenticated: false })
  }))
);
