import { IInsertDBRecord } from '@gordon/models';
import { recordsTable } from './records.schemas';
import { db } from '@db';

export const createRecords = (records: IInsertDBRecord[]) =>
  db.insert(recordsTable).values(records);
