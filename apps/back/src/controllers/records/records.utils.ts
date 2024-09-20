import { IDBRecord, IRecord } from '@gordon/models';

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
