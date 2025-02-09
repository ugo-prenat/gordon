import { db } from '@db';
import { driverCardsValueTable } from './driverCardsValue.schemas';
import { IInsertDBDriverCardValue } from '@gordon/models';

export const createDBDriverCardsValues = (
  driverCardsValues: IInsertDBDriverCardValue[]
) => db.insert(driverCardsValueTable).values(driverCardsValues);
