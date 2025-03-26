import { db } from '@db';
import { chassisCardsTable } from './chassisCards.schemas';
import {
  ICompleteDBChassisCard,
  IDBChassisCard,
  IInsertDBChassisCard,
  PartialWithId
} from '@gordon/models';
import { eq } from 'drizzle-orm';

export const createDBChassisCard = (chassisCards: IInsertDBChassisCard[]) =>
  db
    .insert(chassisCardsTable)
    .values(chassisCards)
    .returning({ id: chassisCardsTable.id })
    .then((ids) => ids.map(({ id }) => id));

export const getDBChassisCards = (): Promise<ICompleteDBChassisCard[]> =>
  db.query.chassisCardsTable.findMany({
    with: {
      chassis: {
        with: { team: true }
      }
    }
  });

export const getDBChassisCardById = (
  id: string
): Promise<ICompleteDBChassisCard | undefined> =>
  db.query.chassisCardsTable.findFirst({
    where: eq(chassisCardsTable.id, id),
    with: { chassis: { with: { team: true } } }
  });

export const updateDBChassisCard = (
  chassisCard: PartialWithId<IDBChassisCard>
) =>
  db
    .update(chassisCardsTable)
    .set(chassisCard)
    .where(eq(chassisCardsTable.id, chassisCard.id));
