import { useSettings } from '@/services/store/settings/settings.stores';
import { buildPictureUrl } from '@/utils/images.utils';
import { cn } from '@/utils/tailwind.utils';
import { ITeam } from '@gordon/models';
import { FC } from 'react';

type TeamLogoPaths = Pick<ITeam, 'id' | 'darkLogoPath' | 'lightLogoPath'> & {
  useDark?: boolean;
  useLight?: boolean;
  className?: string;
};

export const TeamLogo: FC<TeamLogoPaths> = ({
  id,
  darkLogoPath,
  lightLogoPath,
  useDark,
  useLight,
  className
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
      className={cn('object-contain rounded-sm w-8 h-8', className)}
      alt={`${id}-logo`}
      src={buildPictureUrl(logoPath, 'c_fit,w_100,h_100')}
    />
  );
};
