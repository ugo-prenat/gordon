import { IDBRecord, IRecord, RaceResult } from '@gordon/models';

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
  result,
  avgScore,
  ...record
}: IDBRecord): IRecord => ({
  ...record,
  score: +score,
  avgScore: avgScore ? +avgScore : null,
  result: formatRecordResult(result),
  race: {
    key: raceKey,
    name: raceName,
    round: raceRound,
    index: raceIndex,
    countryCode: raceCountryCode
  }
});

export const formatDBRecords = (records: IDBRecord[]) =>
  records.map(formatDBRecord);

export const formatDBRecord = (record: IDBRecord): IDBRecord => ({
  ...record,
  result: formatRecordResult(record.result)
});

const formatRecordResult = (result: RaceResult): RaceResult =>
  isNaN(+result) ? (result as RaceResult) : +result;
