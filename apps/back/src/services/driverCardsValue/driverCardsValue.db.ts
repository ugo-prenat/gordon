import { db } from '@db';
import { driverCardsValueTable } from './driverCardsValue.schemas';
import { IInsertDBDriverCardValue, IDBDriverCardValue } from '@gordon/models';

export const createDBDriverCardsValue = (
  driverCardsValue: IInsertDBDriverCardValue
): Promise<IDBDriverCardValue[]> =>
  db.insert(driverCardsValueTable).values(driverCardsValue).returning();
