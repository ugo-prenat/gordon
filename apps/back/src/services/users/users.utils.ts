import { IDBUser, IFrontUser } from '@gordon/models';

export const formatUsersToFront = (users: IDBUser[]): IFrontUser[] =>
  users.map((user) => formatUserToFront(user));

export const formatUserToFront = (user: IDBUser): IFrontUser => {
  if (user.isGuest) return user;

  const { password, ...rest } = user;
  return rest;
};

export const buildGuestUserId = () => {
  const id = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, '0');
  return `guest-${id}`;
};
