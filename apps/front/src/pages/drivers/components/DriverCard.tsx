import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { IDriver } from '@gordon/models';
import { FC } from 'react';

interface IDriverCardProps {
  driver: IDriver;
}

export const DriverCard: FC<IDriverCardProps> = ({ driver }) => {
  const { fullName, value } = driver;
  return (
    <Card>
      <CardHeader>
        <CardTitle>{fullName}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg font-semibold">
          {value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </p>
      </CardContent>
    </Card>
  );
};
