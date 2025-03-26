import { db } from '@db';
import { chassisTable } from './chassis.schemas';
import { IDBChassis, IInsertDBChassis, WithTeam } from '@gordon/models';
import { eq } from 'drizzle-orm';

export const createDBChassis = (chassis: IInsertDBChassis[]) =>
  db
    .insert(chassisTable)
    .values(chassis)
    .returning({ id: chassisTable.id })
    .then((ids) => ids.map(({ id }) => id));

export const getDBChassis = (): Promise<WithTeam<IDBChassis>[]> =>
  db.query.chassisTable.findMany({ with: { team: true } });

export const getDBChassisById = (
  id: string
): Promise<WithTeam<IDBChassis> | undefined> =>
  db.query.chassisTable.findFirst({
    where: eq(chassisTable.id, id),
    with: { team: true }
  });

export const updateDBChassis = (chassis: IDBChassis) =>
  db.update(chassisTable).set(chassis).where(eq(chassisTable.id, chassis.id));
