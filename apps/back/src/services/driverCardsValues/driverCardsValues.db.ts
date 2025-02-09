import { db } from '@db';
import { driverCardsValuesTable } from './driverCardsValues.schemas';
import {
  IDBDriverCardValue,
  IInsertDBDriverCardValue,
  WithDBRecord
} from '@gordon/models';
import { and } from 'drizzle-orm';
import { eq } from 'drizzle-orm';

export const createDBDriverCardsValues = (
  driverCardsValues: IInsertDBDriverCardValue[]
) => db.insert(driverCardsValuesTable).values(driverCardsValues);

export const getDBDriverCardsValues = ({
  driverId,
  type
}: Partial<IDBDriverCardValue>): Promise<WithDBRecord<IDBDriverCardValue>[]> =>
  db.query.driverCardsValuesTable.findMany({
    where: and(
      driverId ? eq(driverCardsValuesTable.driverId, driverId) : undefined,
      type ? eq(driverCardsValuesTable.type, type) : undefined
    ),
    with: { record: true }
  });
