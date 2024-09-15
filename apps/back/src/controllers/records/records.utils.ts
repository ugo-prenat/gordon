import { IFlattenedRecord, IRecord } from '@gordon/models';

export const flattenedRecordsToRecords = (
  flattenedRecords: IFlattenedRecord[]
): IRecord[] => flattenedRecords.map(flattenedRecordToRecord);

export const flattenedRecordToRecord = ({
  raceName,
  raceRound,
  raceIndex,
  ...record
}: IFlattenedRecord): IRecord => ({
  ...record,
  race: {
    name: raceName,
    round: raceRound,
    index: raceIndex
  }
});
