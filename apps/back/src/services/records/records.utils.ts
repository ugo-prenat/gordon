import { IDBRecord, IRecord } from '@gordon/models';
import { ICreateRecordsResponse, IDriverWithRecords } from './records.models';
import { createDBRecords } from './records.db';
import { isEmpty } from '@gordon/utils';

// export const createRecords = (
//   driversWithRecords: IDriverWithRecords[]
// ): Promise<string> => {

//   const frecords = driversWithRecords.map(({ driver,records }) => {
//     createDBRecords(records).then(res => {

//     })
//     return 'rere'
//   })

//   return Promise.all(frecords)
// };
export const createRecords = (
  driversWithRecords: IDriverWithRecords[]
): Promise<ICreateRecordsResponse> => {
  const records = driversWithRecords.flatMap(({ records }) => records);

  return createDBRecords(records).then(
    ({ insertedRecordsNb, updatedRecordsDriverIds }) => {
      console.log(
        `${records.length} records scraped, ${insertedRecordsNb} inserted`
      );
      console.log(
        `updated drivers: ${updatedRecordsDriverIds.join(', ')}`,
        updatedRecordsDriverIds.length
      );

      if (isEmpty(updatedRecordsDriverIds)) console.log('no drivers updated');

      return {
        insertedRecordsNb,
        scrapedRecordsNb: records.length,
        driversNb: driversWithRecords.length
      };
    }
  );
};

export const dbRecordsToRecords = (dbRecords: IDBRecord[]) =>
  dbRecords.map(dbRecordToRecord);

export const dbRecordToRecord = ({
  raceName,
  raceKey,
  raceRound,
  raceIndex,
  raceCountryCode,
  createdAt,
  ...record
}: IDBRecord): IRecord => ({
  ...record,
  score: Number(record.score),
  race: {
    key: raceKey,
    name: raceName,
    round: raceRound,
    index: raceIndex,
    countryCode: raceCountryCode
  }
});
