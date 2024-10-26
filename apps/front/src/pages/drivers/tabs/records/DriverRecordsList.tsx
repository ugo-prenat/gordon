import { IRecord } from '@gordon/models';
import { FC } from 'react';
import { DriverRecordCard } from './DriverRecordCard';

interface IDriverRecordsListProps {
  records: IRecord[];
}

export const DriverRecordsList: FC<IDriverRecordsListProps> = ({ records }) => {
  return (
    <div id="driver-records-list" className="flex flex-col gap-4 p-6">
      {records.map((record) => (
        <DriverRecordCard key={record.id} record={record} />
      ))}
    </div>
  );
};
