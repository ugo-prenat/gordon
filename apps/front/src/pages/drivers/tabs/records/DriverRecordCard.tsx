import { Card } from '@/components/ui/card';
import { IRecord } from '@gordon/models';
import { FC } from 'react';

interface IDriverRecordCardProps {
  record: IRecord;
}

export const DriverRecordCard: FC<IDriverRecordCardProps> = ({ record }) => {
  const { id, race } = record;
  const { name, key } = race;

  return (
    <Card className="flex gap-6 p-4">
      <p className="opacity-50">{id}</p>
      <p>
        {name} - {key}
      </p>
    </Card>
  );
};
