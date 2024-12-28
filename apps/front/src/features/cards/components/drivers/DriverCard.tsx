import { FC } from 'react';
import { IMarketDriverCard } from '@gordon/models';
import { CardContainer } from '../CardContainer';
import { cn } from '@/utils/tailwind.utils';
import { Flag } from '@/components/Flag';
import { ChampionshipLogo } from '../../../../components/pictures/ChampionshipLogo';
import { DriverPicture } from '@/components/pictures/DriverPicture';
import { buildPictureUrl } from '@/utils/images.utils';

interface IDriverCardProps {
  card: IMarketDriverCard;
  disableHover?: boolean;
}

export const DriverCard: FC<IDriverCardProps> = ({
  card,
  disableHover = false
}) => {
  const { driver, picturePath, type, season, championship } = card;
  const { id: driverId, nationalityCountryCode, firstName, lastName } = driver;

  return (
    <CardContainer resource="driver" disableHover={disableHover} type={type}>
      <div>
        <DriverPicture
          id={driverId}
          pictureUrl={buildPictureUrl(picturePath, 'c_fill,w_800,ar_4:5')}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-end text-background dark:text-foreground z-10 p-4">
          <div className="w-full opacity-0 animate-fade-in">
            <DriverName firstName={firstName} lastName={lastName} />

            <div className="flex justify-between items-end">
              <Flag
                countryCode={nationalityCountryCode}
                className="w-5 rounded-[2px]"
              />
              <p className="text-xs font-extralight opacity-70">{season}</p>
              <ChampionshipLogo championship={championship} type={type} />
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent"></div>
      </div>
    </CardContainer>
  );
};

const DriverName: FC<{ firstName: string; lastName: string }> = ({
  firstName,
  lastName
}) => (
  <div className="flex flex-col items-center">
    <p className="font-medium text-xs tracking-tight leading-none">
      {firstName?.toUpperCase()}
    </p>
    <p
      className={cn('text-xl tracking-tight font-extrabold whitespace-nowrap', {
        'text-lg': lastName.length > 7
      })}
    >
      {lastName?.toUpperCase()}
    </p>
  </div>
);
