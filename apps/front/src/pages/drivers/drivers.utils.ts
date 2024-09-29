import { IRecord } from '@gordon/models';

export const getScoreColor = (score: number) => {
  if (score < 10) return 'bg-score-veryLow';
  if (score < 20) return 'bg-score-low';
  if (score < 40) return 'bg-score-mediumLow';
  if (score < 60) return 'bg-score-medium';
  if (score < 80) return 'bg-score-mediumHigh';
  return 'bg-score-high';
};

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
