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

export const getScoreColor = (score: number) => {
  if (score < 20) return 'score-very-low';
  if (score < 40) return 'score-low';
  if (score < 60) return 'score-medium-low';
  if (score < 80) return 'score-medium';
  return 'score-high';
};
