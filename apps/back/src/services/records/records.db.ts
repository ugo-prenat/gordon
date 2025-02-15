import { eq } from 'drizzle-orm';
import { IDBRecord, IInsertDBRecord, PartialWithId } from '@gordon/models';
import { recordsTable } from './records.schemas';
import { db } from '@db';
import { formatDBRecords, formatDBRecord } from './records.utils';

export const createDBRecords = (
  records: IInsertDBRecord[]
): Promise<IDBRecord[]> =>
  db
    .insert(recordsTable)
    .values(records)
    .onConflictDoNothing({
      target: [
        recordsTable.driverId,
        recordsTable.year,
        recordsTable.raceRound,
        recordsTable.raceIndex
      ]
    })
    .returning();

export const getDBRecords = (): Promise<IDBRecord[]> =>
  db.query.recordsTable.findMany().then(formatDBRecords);

export const getDBRecord = (id: number): Promise<IDBRecord | undefined> =>
  db.query.recordsTable
    .findFirst({
      where: eq(recordsTable.id, id)
    })
    .then((record) => record && formatDBRecord(record));

export const getDBRecordsByDriverId = (
  driverId: string
): Promise<IDBRecord[]> =>
  db.query.recordsTable
    .findMany({
      where: eq(recordsTable.driverId, driverId),
      orderBy: (records, { desc }) => [desc(records.id)]
    })
    .then(formatDBRecords);

export const updateDBRecord = (record: PartialWithId<IDBRecord>) =>
  db.update(recordsTable).set(record).where(eq(recordsTable.id, record.id));

export const deleteDBRecord = (id: number) =>
  db.delete(recordsTable).where(eq(recordsTable.id, id));
