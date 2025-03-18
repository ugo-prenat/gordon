import { db } from '@db';
import { usersTable } from './users.schemas';
import { IDBUser, IInsertDBUser, PartialWithId } from '@gordon/models';
import { eq } from 'drizzle-orm';

export const getDBUsers = (): Promise<IDBUser[]> =>
  db.query.usersTable.findMany() as Promise<IDBUser[]>;

export const getDBUser = (id: string): Promise<IDBUser | undefined> =>
  db.query.usersTable.findFirst({ where: eq(usersTable.id, id) }) as Promise<
    IDBUser | undefined
  >;

export const createDBUser = (user: IInsertDBUser): Promise<IDBUser> =>
  db
    .insert(usersTable)
    .values(user)
    .returning()
    .then((users) => users[0] as IDBUser);

export const updateDBUser = (user: PartialWithId<IDBUser>): Promise<IDBUser> =>
  db
    .update(usersTable)
    .set(user)
    .where(eq(usersTable.id, user.id))
    .returning()
    .then((users) => users[0] as IDBUser);
