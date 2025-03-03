import {
  IDBDriverCard,
  IDBDriverCardValue,
  IInsertDBDriverCard,
  MarketDriverCardFilters,
  PartialWithId,
  WithDriver,
  WithTeam
} from '@gordon/models';
import { driverCardsTable } from './driverCards.schemas';
import { and, between, desc, eq, inArray, sql } from 'drizzle-orm';
import { db } from '@db';
import { getDriverIdsByName } from '@services/drivers/drivers.utils';
export const getDBDriverCards = (
  filters: MarketDriverCardFilters
): Promise<WithDriver<WithTeam<IDBDriverCard>>[]> =>
  getDriverIdsByName(filters.name).then((driverIds) =>
    db.query.driverCardsTable.findMany({
      where: and(
        filters.driverId
          ? eq(driverCardsTable.driverId, filters.driverId)
          : undefined,
        filters.value?.max
          ? filters.value.min
            ? between(
                driverCardsTable.value,
                filters.value.min,
                filters.value.max
              )
            : between(driverCardsTable.value, 0, filters.value.max)
          : undefined,
        driverIds ? inArray(driverCardsTable.driverId, driverIds) : undefined,
        filters.teamIds
          ? inArray(driverCardsTable.teamId, filters.teamIds)
          : undefined,
        filters.types
          ? inArray(driverCardsTable.type, filters.types)
          : undefined,
        filters.seasons
          ? inArray(driverCardsTable.season, filters.seasons)
          : undefined,
        filters.championships
          ? inArray(driverCardsTable.championship, filters.championships)
          : undefined
      ),
      with: { driver: true, team: true },
      orderBy: [
        desc(
          sql`CASE 
            WHEN ${driverCardsTable.type} = 'common' THEN 1
            WHEN ${driverCardsTable.type} = 'rare' THEN 2
            WHEN ${driverCardsTable.type} = 'unique' THEN 3
            WHEN ${driverCardsTable.type} = 'champion' THEN 4
            WHEN ${driverCardsTable.type} = 'vintage' THEN 5
            ELSE 6
          END`
        )
      ]
    })
  );

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
    .where(eq(driverCardsTable.id, id));

export const updateDBDriverCardFromValue = ({
  driverId,
  type,
  value,
  valueTrend
}: IDBDriverCardValue) =>
  db
    .update(driverCardsTable)
    .set({ value, valueTrend })
    .where(
      and(
        eq(driverCardsTable.type, type),
        eq(driverCardsTable.driverId, driverId)
      )
    );

export const deleteDBDriverCard = (id: string) =>
  db.delete(driverCardsTable).where(eq(driverCardsTable.id, id));
