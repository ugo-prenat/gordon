import {
  ICompleteDBUserChassisCard,
  IDBUserChassisCard,
  IInsertDBUserChassisCard
} from '@gordon/models';
import { userChassisCardsTable } from './userChassisCards.schemas';
import { db } from '@db';
import { eq } from 'drizzle-orm';
import { and } from 'drizzle-orm';

export const getDBUserChassisCards = (
  ownerId: string
): Promise<ICompleteDBUserChassisCard[]> =>
  db.query.userChassisCardsTable.findMany({
    where: eq(userChassisCardsTable.ownerId, ownerId),
    with: { card: { with: { chassis: { with: { team: true } } } } }
  });

export const getDBUserChassisCard = ({
  id,
  cardId,
  ownerId
}: Partial<IDBUserChassisCard>): Promise<
  ICompleteDBUserChassisCard | undefined
> =>
  db.query.userChassisCardsTable.findFirst({
    where: and(
      id ? eq(userChassisCardsTable.id, id) : undefined,
      cardId ? eq(userChassisCardsTable.cardId, cardId) : undefined,
      ownerId ? eq(userChassisCardsTable.ownerId, ownerId) : undefined
    ),
    with: { card: { with: { chassis: { with: { team: true } } } } }
  });

export const createDBUserChassisCard = (
  userChassisCard: IInsertDBUserChassisCard
) => db.insert(userChassisCardsTable).values(userChassisCard).returning();

export const deleteDBUserChassisCard = (id: string) =>
  db.delete(userChassisCardsTable).where(eq(userChassisCardsTable.id, id));
