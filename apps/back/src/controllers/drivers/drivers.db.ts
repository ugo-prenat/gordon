import { db } from '@db/db.index';
import { driversTable, IInsertDBDriver } from '@db/schemas/drivers.schemas';
import { eq } from 'drizzle-orm';

export const createDBDriver = (driver: IInsertDBDriver) =>
  db.insert(driversTable).values(driver).returning();

export const getDBDriver = (id: string) =>
  db.select().from(driversTable).where(eq(driversTable.id, id));

export const getDBDrivers = () => db.select().from(driversTable);

export const updateDBDriver = (id: string, driver: IInsertDBDriver) =>
  db.update(driversTable).set(driver).where(eq(driversTable.id, id));

export const deleteDBDriver = (id: string) =>
  db.delete(driversTable).where(eq(driversTable.id, id));
