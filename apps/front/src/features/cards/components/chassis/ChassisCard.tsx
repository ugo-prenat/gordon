import { IMarketChassisCard } from '@gordon/models';
import { FC } from 'react';
import { CardContainer } from '../CardContainer';
import { ChassisPicture } from '@/components/pictures/ChassisPicture';
import { buildPictureUrl } from '@/utils/images.utils';
import { TeamLogo } from '@/components/pictures/TeamLogo';
import { ChampionshipLogo } from '@/components/pictures/ChampionshipLogo';

interface IChassisCardProps {
  card: IMarketChassisCard;
  disableHover?: boolean;
}

export const ChassisCard: FC<IChassisCardProps> = ({
  card,
  disableHover = false
}) => {
  const { chassis, type, id } = card;
  const { name, picturePath, season, team, championship } = chassis;

  return (
    <CardContainer resource="chassis" disableHover={disableHover} type={type}>
      <div>
        <ChassisPicture
          id={id}
          pictureUrl={buildPictureUrl(picturePath, 'c_fit,w_800,ar_5:3')}
        />
        <div className="absolute inset-0 bottom-0 flex flex-col items-center justify-end text-background dark:text-foreground z-10 p-4">
          <div className="w-full opacity-0 animate-fade-in">
            <p
              className={
                'text-xl text-center tracking-tight font-extrabold whitespace-nowrap'
              }
            >
              {name}
            </p>

            <div className="flex justify-between items-end">
              <TeamLogo {...team} className="w-5 h-5 rounded-[2px]" />
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
