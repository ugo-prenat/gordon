import {
  IDBDriverCard,
  IInsertDBDriverCard,
  PartialWithId,
  WithDriver,
  WithTeam
} from '@gordon/models';
import { driverCardsTable } from './driverCards.schemas';
import { eq } from 'drizzle-orm';
import { db } from '@db';
export const getDBDriverCards = (): Promise<
  WithDriver<WithTeam<IDBDriverCard>>[]
> =>
  db.query.driverCardsTable.findMany({
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
