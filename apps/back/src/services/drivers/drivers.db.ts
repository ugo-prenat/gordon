import { db } from '@db';
import { driversTable } from '@services/drivers/drivers.schemas';
import { eq, ilike, or } from 'drizzle-orm';
import { IDBDriver, IInsertDBDriver, PartialWithId } from '@gordon/models';

export const createDBDriver = (driver: IInsertDBDriver): Promise<string[]> =>
  db
    .insert(driversTable)
    .values(driver)
    .returning({ id: driversTable.id })
    .then((ids) => ids.map(({ id }) => id));

export const getDBDrivers = (filters?: {
  name?: string;
}): Promise<IDBDriver[]> =>
  db.query.driversTable.findMany({
    where: or(
      filters?.name
        ? ilike(driversTable.lastName, `%${filters.name}%`)
        : undefined,
      filters?.name
        ? ilike(driversTable.firstName, `%${filters.name}%`)
        : undefined
    )
  });

export const getDBDriver = (id: string): Promise<IDBDriver | undefined> =>
  db.query.driversTable.findFirst({
    where: eq(driversTable.id, id)
  });

export const updateDBDriver = ({
  id,
  ...driver
}: PartialWithId<IDBDriver>): Promise<string[]> =>
  db
    .update(driversTable)
    .set(driver)
    .where(eq(driversTable.id, id))
    .returning({ id: driversTable.id })
    .then((ids) => ids.map(({ id }) => id));

export const deleteDBDriver = (id: string) =>
  db.delete(driversTable).where(eq(driversTable.id, id));
