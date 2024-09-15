import { IFlattenedRecord, IRecord } from '@gordon/models';

export const flattenedRecordsToRecords = (
  flattenedRecords: IFlattenedRecord[]
): IRecord[] => flattenedRecords.map(flattenedRecordToRecord);

export const flattenedRecordToRecord = ({
  raceName,
  raceKey,
  raceRound,
  raceIndex,
  ...record
}: IFlattenedRecord): IRecord => ({
  ...record,
  race: {
    key: raceKey,
    name: raceName,
    round: raceRound,
    index: raceIndex
  }
});
