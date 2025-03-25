import { db } from '@db';
import { chassisTable } from './chassis.schemas';
import { IDBChassis, IInsertDBChassis } from '@gordon/models';
import { eq } from 'drizzle-orm';

export const createDBChassis = (chassis: IInsertDBChassis[]) =>
  db
    .insert(chassisTable)
    .values(chassis)
    .returning({ id: chassisTable.id })
    .then((ids) => ids.map(({ id }) => id));

export const getDBChassis = () => db.query.chassisTable.findMany();

export const getDBChassisById = (id: string) =>
  db.query.chassisTable.findFirst({ where: eq(chassisTable.id, id) });

export const updateDBChassis = (chassis: IDBChassis) =>
  db.update(chassisTable).set(chassis).where(eq(chassisTable.id, chassis.id));
