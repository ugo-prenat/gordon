import { IDriverWithRecords } from '@controllers/records/records.models';
import { IInsertDBRecord } from '@gordon/models';
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
  updateDBDriver({ id: driver.id, value: calculateDriverValue(records) });

const calculateDriverValue = (records: IInsertDBRecord[]) => {
  const currentYear = new Date().getFullYear();
  const activeYearRecords = records.filter(({ year }) => year === currentYear);

  const totalScore = activeYearRecords.reduce(
    (sum, record) => sum + Number(record.score),
    0
  );
  return totalScore / activeYearRecords.length;
};
