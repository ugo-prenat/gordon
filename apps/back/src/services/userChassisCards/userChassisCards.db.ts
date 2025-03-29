import { IDBUserChassisCard, IInsertDBUserChassisCard } from '@gordon/models';
import { userChassisCardsTable } from './userChassisCards.schemas';
import { db } from '@db';
import { eq } from 'drizzle-orm';
import { and } from 'drizzle-orm';

export const getDBUserChassisCard = (
  cardId: string,
  ownerId: string
): Promise<IDBUserChassisCard | undefined> =>
  db.query.userChassisCardsTable.findFirst({
    where: and(
      eq(userChassisCardsTable.cardId, cardId),
      eq(userChassisCardsTable.ownerId, ownerId)
    )
  });

export const createDBUserChassisCard = (
  userChassisCard: IInsertDBUserChassisCard
) => db.insert(userChassisCardsTable).values(userChassisCard).returning();

export const deleteDBUserChassisCard = (id: string) =>
  db.delete(userChassisCardsTable).where(eq(userChassisCardsTable.id, id));
