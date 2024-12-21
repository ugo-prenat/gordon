import { FC } from 'react';
import { CardType, Championship } from '@gordon/models';
import { OldF1Logo } from '@/assets/OldF1Logo';
import { F2Logo } from '@/assets/F2Logo';
import { F1Logo } from '@/assets/F1Logo';
import { F3Logo } from '@/assets/F3Logo';
import { cn } from '@/utils/tailwind.utils';

export const ChampionshipLogo: FC<{
  championship: Championship;
  type: CardType;
  classname?: string;
}> = ({ championship, type, classname }) => {
  const key =
    championship === 'f1' && type === 'vintage' ? 'old-f1' : championship;

  switch (key) {
    case 'old-f1':
      return <OldF1Logo className={classname} />;
    case 'f1':
      return <F1Logo className={classname} />;
    case 'f2':
      return <F2Logo className={classname} />;
    case 'f3':
      return <F3Logo className={classname} />;
    default:
      return (
        <p className={cn('text-sm font-black')}>{championship.toUpperCase()}</p>
      );
  }
};
