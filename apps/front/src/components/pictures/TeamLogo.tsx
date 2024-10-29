import { useSettings } from '@/services/store/settings/settings.stores';
import { buildPictureUrl } from '@/utils/images.utils';
import { ITeam } from '@gordon/models';
import { FC } from 'react';

type TeamLogoPaths = Pick<ITeam, 'id' | 'darkLogoPath' | 'lightLogoPath'> & {
  useDark?: boolean;
  useLight?: boolean;
};

export const TeamLogo: FC<TeamLogoPaths> = ({
  id,
  darkLogoPath,
  lightLogoPath,
  useDark,
  useLight
}) => {
  const { theme } = useSettings();
  const logoPath = useDark
    ? darkLogoPath
    : useLight
      ? lightLogoPath
      : theme === 'dark'
        ? lightLogoPath
        : darkLogoPath;

  return (
    <img
      className="max-w-10 max-h-10 object-contain"
      alt={`${id}-logo`}
      src={buildPictureUrl(logoPath, 'c_fit,w_100,h_100')}
    />
  );
};
