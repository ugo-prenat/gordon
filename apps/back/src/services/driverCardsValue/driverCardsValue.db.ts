import { db } from '@db';
import { driverCardsValueTable } from './driverCardsValue.schemas';
import {
  IDBDriverCardValue,
  IInsertDBDriverCardValue,
  WithDBRecord
} from '@gordon/models';
import { and } from 'drizzle-orm';
import { eq } from 'drizzle-orm';

export const createDBDriverCardsValues = (
  driverCardsValues: IInsertDBDriverCardValue[]
) => db.insert(driverCardsValueTable).values(driverCardsValues);

export const getDBDriverCardsValues = ({
  driverId,
  type
}: Partial<IDBDriverCardValue>): Promise<WithDBRecord<IDBDriverCardValue>[]> =>
  db.query.driverCardsValueTable.findMany({
    where: and(
      driverId ? eq(driverCardsValueTable.driverId, driverId) : undefined,
      type ? eq(driverCardsValueTable.type, type) : undefined
    ),
    with: { record: true }
  });
