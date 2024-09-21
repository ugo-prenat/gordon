import { IDBRecord, IRecord } from '@gordon/models';
import { ICreateRecordsResponse, IDriverWithRecords } from './records.models';
import { createDBRecords } from './records.db';
import { updateDriversValues } from '@controllers/drivers/drivers.utils';

export const createRecords = (
  driversWithRecords: IDriverWithRecords[]
): Promise<ICreateRecordsResponse> => {
  const records = driversWithRecords.flatMap(({ records }) => records);

  return createDBRecords(records).then(
    ({ insertedRecordsNb, updatedRecordsDriverIds }) =>
      updateDriversValues(driversWithRecords, updatedRecordsDriverIds).then(
        () => ({
          insertedRecordsNb,
          scrapedRecordsNb: records.length,
          driversNb: driversWithRecords.length
        })
      )
  );
};

export const dbRecordsToRecords = (dbRecords: IDBRecord[]) =>
  dbRecords.map(dbRecordToRecord);

export const dbRecordToRecord = ({
  raceName,
  raceKey,
  raceRound,
  raceIndex,
  createdAt,
  ...record
}: IDBRecord): IRecord => ({
  ...record,
  score: Number(record.score),
  race: {
    key: raceKey,
    name: raceName,
    round: raceRound,
    index: raceIndex
  }
});
