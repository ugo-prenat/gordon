import { db } from '@db';
import { chassisCardsTable } from './chassisCards.schemas';
import {
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

export const getDBChassisCards = () => db.query.chassisCardsTable.findMany();

export const getDBChassisCardById = (id: string) =>
  db.query.chassisCardsTable.findFirst({ where: eq(chassisCardsTable.id, id) });

export const updateDBChassisCard = (
  chassisCard: PartialWithId<IDBChassisCard>
) =>
  db
    .update(chassisCardsTable)
    .set(chassisCard)
    .where(eq(chassisCardsTable.id, chassisCard.id));
