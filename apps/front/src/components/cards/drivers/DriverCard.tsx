import { Card, CardContent } from '@/components/ui/card';
import { IDriver } from '@gordon/models';
import { Link } from '@tanstack/react-router';
import { FC } from 'react';
import { buildImgUrl } from '@/utils/images.utils';

interface IDriverCardProps {
  driver: IDriver;
}

export const DriverCard: FC<IDriverCardProps> = ({ driver }) => {
  const { fullName, value, picturePath, id } = driver;
  return (
    <Link to={`/drivers/${id}`} className="w-full">
      <Card>
        <div className="relative mb-2">
          <img
            src={buildImgUrl(picturePath, `c_fill,w_400,ar_4:5`)}
            alt={`${id}-picture`}
            className="w-full h-auto"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/80 to-transparent h-1/3">
            <p className="text-center font-semibold text-lg absolute bottom-0 left-0 right-0">
              {fullName}
            </p>
          </div>
        </div>
        <CardContent>
          <p className="text-muted-foreground">
            {value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};
