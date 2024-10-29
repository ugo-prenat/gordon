import { FC } from 'react';
import { Championship, IMarketDriverCard } from '@gordon/models';
import { CardContainer } from '../CardContainer';
import { buildPictureUrl } from '@/utils/images.utils';
import { DriverPicture } from '@/components/pictures/DriverPicture';
import { TeamLogo } from '@/components/pictures/TeamLogo';
import { cn } from '@/utils/tailwind.utils';
import { Flag } from '@/components/CountryFlag';

interface IDriverCardProps {
  card: IMarketDriverCard;
  disableHover?: boolean;
}

export const DriverCard: FC<IDriverCardProps> = ({
  card,
  disableHover = false
}) => {
  const { driver, picturePath, type, season, team, championship } = card;
  const { id: driverId, fullName, nationalityCountryCode } = driver;

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

          <SeasonAndChamp season={season} championship={championship} />

          <div className="flex flex-col items-center">
            <DriverName fullName={fullName} />
            <Flag
              countryCode={nationalityCountryCode}
              className="w-5 rounded-[2px]"
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black to-transparent"></div>
      </div>
    </CardContainer>
  );
};

const DriverName: FC<{ fullName: string }> = ({ fullName }) => {
  const [firstName, ...rest] = fullName.split(' ');
  const lastName = rest.join(' ');

  return (
    <div className="flex flex-col items-center">
      <p className="font-medium text-xs tracking-tight leading-none">
        {firstName?.toUpperCase()}
      </p>
      <p
        className={cn(
          'text-xl tracking-tight font-extrabold whitespace-nowrap',
          {
            'text-md': lastName.length > 7
          }
        )}
      >
        {lastName?.toUpperCase()}
      </p>
    </div>
  );
};

const SeasonAndChamp: FC<{ season: number; championship: Championship }> = ({
  season,
  championship
}) => {
  return (
    <div className="w-full flex flex-col items-end">
      <div className="flex flex-col leading-none text-sm font-black">
        <p>{season.toString().slice(0, 2)}</p>
        <p>{season.toString().slice(2)}</p>
      </div>
      <p className="text-sm font-black">{championship.toUpperCase()}</p>
    </div>
  );
};
