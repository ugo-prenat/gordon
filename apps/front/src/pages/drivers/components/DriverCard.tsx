import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { IDriver } from '@gordon/models';

interface IDriverCardProps {
  driver: IDriver;
}

export const DriverCard = ({ driver }: IDriverCardProps) => {
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
