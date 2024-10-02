import {
  IDBDriverCard,
  IInsertDBDriverCard,
  PartialWithId
} from '@gordon/models';
import { driverCardsTable } from './driverCards.schemas';
import { eq } from 'drizzle-orm';
import { db } from '@db';
export const getDBDriverCards = (): Promise<IDBDriverCard[]> =>
  db.query.driverCardsTable.findMany();

export const getDBDriverCard = (
  id: string
): Promise<IDBDriverCard | undefined> =>
  db.query.driverCardsTable.findFirst({
    where: eq(driverCardsTable.id, id)
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
