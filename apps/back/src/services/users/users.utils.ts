import { IDBUser, IFrontUser } from '@gordon/models';

export const formatUsersToFront = (users: IDBUser[]): IFrontUser[] =>
  users.map((user) => formatUserToFront(user));

export const formatUserToFront = (user: IDBUser): IFrontUser => {
  if (user.isGuest) return user;

  const { password, ...rest } = user;
  return rest;
};
