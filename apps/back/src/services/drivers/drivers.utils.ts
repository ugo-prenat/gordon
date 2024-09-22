import { IDriverWithRecords } from '@services/records/records.models';
import { CHAMPIONSHIPS_MULTIPLIERS, IInsertDBRecord } from '@gordon/models';
import { updateDBDriver } from './drivers.db';

export const updateDriversValues = (
  driversWithRecords: IDriverWithRecords[],
  driverIdsToUpdate: string[]
) =>
  Promise.all(
    driversWithRecords.map((driverWithRecords) =>
      driverIdsToUpdate.includes(driverWithRecords.driver.id)
        ? updateDriverValue(driverWithRecords)
        : Promise.resolve()
    )
  ).then((results) => results.flat());

const updateDriverValue = ({ driver, records }: IDriverWithRecords) =>
  updateDBDriver({
    id: driver.id,
    value: calculateDriverValue(records)
  }).then(() => console.log(`${driver.id} value updated`));

const calculateDriverValue = (records: IInsertDBRecord[]) => {
  const currentYear = new Date().getFullYear();
  const activeYearRecords = records.filter(({ year }) => year === currentYear);

  const totalScore = activeYearRecords.reduce(
    (sum, record) =>
      sum +
      Number(record.score) * CHAMPIONSHIPS_MULTIPLIERS[record.championship],
    0
  );
  return Number(((totalScore / activeYearRecords.length) * 1000).toFixed());
};
