import { db } from '@db';
import { chassisTable } from './chassis.schemas';
import {
  IDBChassis,
  IInsertDBChassis,
  MarketCardFilters,
  WithTeam
} from '@gordon/models';
import { and, eq, ilike, inArray } from 'drizzle-orm';

export const createDBChassis = (chassis: IInsertDBChassis[]) =>
  db
    .insert(chassisTable)
    .values(chassis)
    .returning({ id: chassisTable.id })
    .then((ids) => ids.map(({ id }) => id));

export const getDBChassis = (
  filters?: MarketCardFilters
): Promise<WithTeam<IDBChassis>[]> =>
  db.query.chassisTable.findMany({
    where: and(
      filters?.name ? ilike(chassisTable.name, `%${filters.name}%`) : undefined,
      filters?.teamIds
        ? inArray(chassisTable.teamId, filters.teamIds)
        : undefined,
      filters?.championships
        ? inArray(chassisTable.championship, filters.championships)
        : undefined,
      filters?.seasons
        ? inArray(chassisTable.season, filters.seasons)
        : undefined
    ),
    with: { team: true }
  });

export const getDBChassisById = (
  id: string
): Promise<WithTeam<IDBChassis> | undefined> =>
  db.query.chassisTable.findFirst({
    where: eq(chassisTable.id, id),
    with: { team: true }
  });

export const updateDBChassis = (chassis: IDBChassis) =>
  db.update(chassisTable).set(chassis).where(eq(chassisTable.id, chassis.id));
