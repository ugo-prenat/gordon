import { db } from '@db';
import { usersTable } from './users.schemas';
import { IDBUser, IInsertDBUser } from '@gordon/models';
import { eq } from 'drizzle-orm';

export const getDBUsers = (): Promise<IDBUser[]> =>
  db.query.usersTable.findMany() as Promise<IDBUser[]>;

export const getDBUser = (id: string): Promise<IDBUser | undefined> =>
  db.query.usersTable.findFirst({ where: eq(usersTable.id, id) }) as Promise<
    IDBUser | undefined
  >;

export const createDBUser = (user: IInsertDBUser): Promise<IDBUser[]> =>
  db
    .insert(usersTable)
    .values(user)
    .returning()
    .then((users) => users as IDBUser[]);
