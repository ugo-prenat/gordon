import {
  IDBDriverCard,
  IInsertDBDriverCard,
  MarketDriverCardFilters,
  PartialWithId,
  WithDriver,
  WithTeam
} from '@gordon/models';
import { driverCardsTable } from './driverCards.schemas';
import { and, eq, inArray } from 'drizzle-orm';
import { db } from '@db';
export const getDBDriverCards = (
  filters: MarketDriverCardFilters
): Promise<WithDriver<WithTeam<IDBDriverCard>>[]> =>
  db.query.driverCardsTable.findMany({
    where: and(
      // filters.name
      // filters.value
      filters.teamIds
        ? inArray(driverCardsTable.teamId, filters.teamIds)
        : undefined,
      filters.types ? inArray(driverCardsTable.type, filters.types) : undefined,
      filters.seasons
        ? inArray(driverCardsTable.season, filters.seasons)
        : undefined,
      filters.championships
        ? inArray(driverCardsTable.championship, filters.championships)
        : undefined
    ),
    with: { driver: true, team: true }
  });

export const getDBDriverCard = (
  id: string
): Promise<WithDriver<WithTeam<IDBDriverCard>> | undefined> =>
  db.query.driverCardsTable.findFirst({
    where: eq(driverCardsTable.id, id),
    with: { driver: true, team: true }
  });

export const createDBDriverCard = (
  driverCard: IInsertDBDriverCard
): Promise<string[]> =>
  db
    .insert(driverCardsTable)
    .values(driverCard)
    .returning({ id: driverCardsTable.id })
    .then((ids) => ids.map(({ id }) => id));

export const updateDBDriverCard = ({
  id,
  ...driverCard
}: PartialWithId<IDBDriverCard>): Promise<string[]> =>
  db
    .update(driverCardsTable)
    .set(driverCard)
    .where(eq(driverCardsTable.id, id))
    .returning({ id: driverCardsTable.id })
    .then((ids) => ids.map(({ id }) => id));

export const deleteDBDriverCard = (id: string) =>
  db.delete(driverCardsTable).where(eq(driverCardsTable.id, id));
