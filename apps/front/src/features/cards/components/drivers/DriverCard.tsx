import { FC } from 'react';
import { IMarketDriverCard } from '@gordon/models';
import { CardContainer } from '../CardContainer';
import { buildPictureUrl } from '@/utils/images.utils';
import { DriverPicture } from '@/components/pictures/DriverPicture';
import { TeamLogo } from '@/components/pictures/TeamLogo';
import { differenceInYears } from 'date-fns';

interface IDriverCardProps {
  card: IMarketDriverCard;
  disableHover?: boolean;
}

export const DriverCard: FC<IDriverCardProps> = ({
  card,
  disableHover = false
}) => {
  const { driver, picturePath, type, season, team, championship } = card;
  const {
    id: driverId,
    fullName,
    dateOfBirth,
    nationalityCountryCode
  } = driver;

  const [firstName, ...rest] = fullName.split(' ');
  const lastName = rest.join(' ');

  return (
    <CardContainer resource="driver" disableHover={disableHover} type={type}>
      <div>
        <DriverPicture
          id={driverId}
          pictureUrl={buildPictureUrl(picturePath, 'c_fill,w_800,ar_4:5')}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-between text-background dark:text-foreground z-10 p-4">
          <div className="flex justify-end w-full">
            <TeamLogo {...team} useLight />
          </div>
          <div className="flex justify-between items-end w-full">
            <div>
              <p>{nationalityCountryCode}</p>
              <p>{differenceInYears(new Date(), new Date(dateOfBirth))}</p>
            </div>
            <div className="flex flex-col items-center">
              <p>{championship}</p>
              <p className="font-medium text-sm tracking-tight leading-none">
                {firstName?.toUpperCase()}
              </p>
              <p className="text-2xl tracking-tight font-extrabold whitespace-nowrap">
                {lastName?.toUpperCase()}
              </p>
            </div>
            <div className="flex flex-col leading-none text-sm font-black">
              <p>{season.toString().slice(0, 2)}</p>
              <p>{season.toString().slice(2)}</p>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-black/80 to-transparent opacity-80"></div>
      </div>
    </CardContainer>
  );
};
