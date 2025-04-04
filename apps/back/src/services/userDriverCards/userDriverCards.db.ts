import {
  ICompleteDBUserDriverCard,
  IDBUserDriverCard,
  IInsertDBUserDriverCard
} from '@gordon/models';
import { userDriverCardsTable } from './userDriverCards.schemas';
import { db } from '@db';
import { and, eq } from 'drizzle-orm';

export const getDBUserDriverCards = (
  ownerId: string
): Promise<ICompleteDBUserDriverCard[]> =>
  db.query.userDriverCardsTable.findMany({
    where: eq(userDriverCardsTable.ownerId, ownerId),
    with: { card: { with: { driver: true, team: true } } }
  });

export const getDBUserDriverCard = ({
  id,
  cardId,
  ownerId
}: Partial<IDBUserDriverCard>): Promise<
  ICompleteDBUserDriverCard | undefined
> =>
  db.query.userDriverCardsTable.findFirst({
    where: and(
      id ? eq(userDriverCardsTable.id, id) : undefined,
      cardId ? eq(userDriverCardsTable.cardId, cardId) : undefined,
      ownerId ? eq(userDriverCardsTable.ownerId, ownerId) : undefined
    ),
    with: { card: { with: { driver: true, team: true } } }
  });

export const createDBUserDriverCard = (
  userDriverCard: IInsertDBUserDriverCard
) => db.insert(userDriverCardsTable).values(userDriverCard).returning();

export const deleteDBUserDriverCard = (id: string) =>
  db.delete(userDriverCardsTable).where(eq(userDriverCardsTable.id, id));
