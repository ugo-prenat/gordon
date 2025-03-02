import { Flag } from '@/components/Flag';
import { CardTypeIcon } from '@/components/pictures/CardTypeIcon';
import { ChampionshipLogo } from '@/components/pictures/ChampionshipLogo';
import { TeamLogo } from '@/components/pictures/TeamLogo';
import { Description } from '@/components/typography';
import { useCountryName, useTranslation } from '@/services/i18n/i18n.hooks';
import { IMarketDriverCard } from '@gordon/models';
import { FC, PropsWithChildren } from 'react';

export const DriverCardDetails: FC<{
  card: IMarketDriverCard;
}> = ({ card }) => {
  const { driver, type, team, season, championship } = card;
  const { dateOfBirth, nationalityCountryCode } = driver;

  const age = new Date().getFullYear() - new Date(dateOfBirth).getFullYear();

  const t = useTranslation();
  const nationalityCountryName = useCountryName(nationalityCountryCode);

  const Detail: FC<{ label: string } & PropsWithChildren> = ({
    label,
    children
  }) => (
    <div className="flex items-center justify-between gap-2">
      <Description>{label}</Description>
      {children}
    </div>
  );

  return (
    <div>
      <p className="font-bold text-lg mb-2">{t('cards.details')}</p>
      <div className="flex flex-col gap-1">
        <Detail label={t('team')}>
          <div className="flex items-center gap-2">
            <TeamLogo
              id={team.id}
              className="w-6 h-6"
              darkLogoPath={team.darkLogoPath}
              lightLogoPath={team.lightLogoPath}
            />
            {team.name}
          </div>
        </Detail>

        <Detail label={t('nationality')}>
          <div className="flex items-center gap-2">
            <Flag countryCode={nationalityCountryCode} />
            {nationalityCountryName}
          </div>
        </Detail>
        <Detail label={t('championship')}>
          <div className="flex items-center gap-2">
            <ChampionshipLogo championship={championship} classname="w-6" />
            {t(`championships.${championship}`)}
          </div>
        </Detail>
        <Detail label={t('type')}>
          <div className="flex items-center gap-2">
            <CardTypeIcon type={type} />
            {type}
          </div>
        </Detail>

        <Detail label={t('season')}>{season}</Detail>
        <Detail label={t('age')}>{age}</Detail>
      </div>
    </div>
  );
};
