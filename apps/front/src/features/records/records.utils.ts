import { IRecord } from '@gordon/models';

export interface ISplitRecords {
  [key: string]: { records: IRecord[]; year: string; teamIds: string[] };
}
export const splitRecords = (records: IRecord[]) => {
  const splittedRecords = records.reduce<ISplitRecords>((acc, record) => {
    const year = String(record.year);
    if (!acc[year]) acc[year] = { records: [], year, teamIds: [] };
    if (!acc[year].teamIds.includes(record.team))
      acc[year].teamIds.push(record.team);
    acc[year].records.push(record);

    return acc;
  }, {});

  return Object.values(splittedRecords);
};
