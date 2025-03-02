import { cn } from '@/utils/tailwind.utils';
import { FC } from 'react';
import { CountryCode, CountryFlag } from 'react-country-flags-lazyload';
import { Tooltip } from './Tooltip';

interface IFlagProps {
  countryCode: string;
  className?: string;
  tooltip?: string;
}

export const Flag: FC<IFlagProps> = ({ countryCode, className, tooltip }) => (
  <Tooltip
    title={tooltip}
    className={cn(
      'w-5 cursor-default overflow-hidden rounded-[2px]',
      className
    )}
  >
    {/* <AspectRatio ratio={16 / 9}> */}
    <CountryFlag countryCode={countryCode as CountryCode} />
    {/* </AspectRatio> */}
  </Tooltip>
);
