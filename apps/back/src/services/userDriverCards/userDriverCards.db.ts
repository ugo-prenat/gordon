import { IDBUserDriverCard, IInsertDBUserDriverCard } from '@gordon/models';
import { userDriverCardsTable } from './userDriverCards.schemas';
import { db } from '@db';
import { eq } from 'drizzle-orm';
import { and } from 'drizzle-orm';

export const getDBUserDriverCard = (
  cardId: string,
  ownerId: string
): Promise<IDBUserDriverCard | undefined> =>
  db.query.userDriverCardsTable.findFirst({
    where: and(
      eq(userDriverCardsTable.cardId, cardId),
      eq(userDriverCardsTable.ownerId, ownerId)
    )
  });

export const createDBUserDriverCard = (
  userDriverCard: IInsertDBUserDriverCard
) => db.insert(userDriverCardsTable).values(userDriverCard).returning();

export const deleteDBUserDriverCard = (id: number) =>
  db.delete(userDriverCardsTable).where(eq(userDriverCardsTable.id, id));
