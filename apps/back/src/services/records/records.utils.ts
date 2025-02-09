import { IDBRecord, IRecord } from '@gordon/models';

export const dbRecordsToRecords = (dbRecords: IDBRecord[]) =>
  dbRecords.map(dbRecordToRecord);

export const dbRecordToRecord = ({
  raceName,
  raceKey,
  raceRound,
  raceIndex,
  raceCountryCode,
  createdAt,
  score,
  avgScore,
  ...record
}: IDBRecord): IRecord => ({
  ...record,
  score: +score,
  avgScore: avgScore ? +avgScore : null,
  race: {
    key: raceKey,
    name: raceName,
    round: raceRound,
    index: raceIndex,
    countryCode: raceCountryCode
  }
});
