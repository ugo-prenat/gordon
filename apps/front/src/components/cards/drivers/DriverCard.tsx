import { FC } from 'react';
import { IMarketDriverCard } from '@gordon/models';
import { CardContainer } from '../CardContainer';
import { buildPictureUrl } from '@/utils/images.utils';
import { DriverPicture } from '@/components/pictures/DriverPicture';

interface IDriverCardProps {
  card: IMarketDriverCard;
  disableHover?: boolean;
}

export const DriverCard: FC<IDriverCardProps> = ({
  card,
  disableHover = false
}) => {
  const { driver, picturePath, type } = card;
  const { id: driverId, fullName } = driver;

  const [firstName, ...rest] = fullName.split(' ');
  const lastName = rest.join(' ');

  return (
    <CardContainer disableHover={disableHover} type={type}>
      <div>
        <DriverPicture
          id={driverId}
          pictureUrl={buildPictureUrl(picturePath, `c_fill,w_800,ar_4:5`)}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-end mb-2 text-background dark:text-foreground z-10">
          <p className="font-medium text-sm tracking-tight leading-none">
            {firstName?.toUpperCase()}
          </p>
          <p className="text-2xl tracking-tight font-extrabold whitespace-nowrap">
            {lastName?.toUpperCase()}
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-black/80 to-transparent opacity-80"></div>
      </div>
    </CardContainer>
  );
};
