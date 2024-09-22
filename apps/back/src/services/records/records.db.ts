import { eq } from 'drizzle-orm';
import { IDBRecord, IInsertDBRecord, PartialWithId } from '@gordon/models';
import { recordsTable } from './records.schemas';
import { db } from '@db';
import { unique } from '@gordon/utils';

export const createDBRecords = (
  records: IInsertDBRecord[]
): Promise<{ updatedRecordsDriverIds: string[]; insertedRecordsNb: number }> =>
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
    .returning({ id: recordsTable.driverId })
    .then((driverIds) => driverIds.map(({ id }) => id))
    .then((driverIds) => ({
      updatedRecordsDriverIds: unique(driverIds),
      insertedRecordsNb: driverIds.length
    }));

export const getDBRecords = (): Promise<IDBRecord[]> =>
  db.select().from(recordsTable);

export const getDBRecord = (id: number): Promise<IDBRecord[]> =>
  db.select().from(recordsTable).where(eq(recordsTable.id, id));

export const getDBRecordsByDriverId = (
  driverId: string
): Promise<IDBRecord[]> =>
  db.query.recordsTable.findMany({
    where: eq(recordsTable.driverId, driverId)
  });

export const updateDBRecord = (record: PartialWithId<IDBRecord>) =>
  db.update(recordsTable).set(record).where(eq(recordsTable.id, record.id));

export const deleteDBRecord = (id: number) =>
  db.delete(recordsTable).where(eq(recordsTable.id, id));
