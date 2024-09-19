import { db } from '@db';
import { driversTable } from '@controllers/drivers/drivers.schemas';
import { eq } from 'drizzle-orm';
import { IDBDriver, IInsertDBDriver, PartialWithId } from '@gordon/models';

export const createDBDriver = (driver: IInsertDBDriver): Promise<string[]> =>
  db
    .insert(driversTable)
    .values(driver)
    .returning({ id: driversTable.id })
    .then((ids) => ids.map(({ id }) => id));

export const getDBDrivers = (): Promise<IDBDriver[]> =>
  db.select().from(driversTable);

export const getDBDriver = (id: string): Promise<IDBDriver[]> =>
  db.select().from(driversTable).where(eq(driversTable.id, id));

export const updateDBDriver = (driver: PartialWithId<IDBDriver>) =>
  db.update(driversTable).set(driver).where(eq(driversTable.id, driver.id));

export const deleteDBDriver = (id: string) =>
  db.delete(driversTable).where(eq(driversTable.id, id));
