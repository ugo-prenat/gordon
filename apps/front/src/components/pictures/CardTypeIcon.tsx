import { ChampionIcon } from '@/assets/cardTypes/ChampionIcon';
import { VintageIcon } from '@/assets/cardTypes/VintageIcon';
import { cn } from '@/utils/tailwind.utils';
import { CardType } from '@gordon/models';
import { Crown, Flame, Star, Zap } from 'lucide-react';

export const CardTypeIcon = ({
  type,
  className
}: {
  type: CardType;
  className?: string;
}) => {
  switch (type) {
    case 'common':
      return <Flame className={cn('fill-current w-4 h-4', className)} />;
    case 'rare':
      return <Zap className={cn('fill-current w-4 h-4', className)} />;
    case 'unique':
      return <Star className={cn('fill-current w-4 h-4', className)} />;
    case 'champion':
      return <ChampionIcon className={cn('fill-current w-4 h-4', className)} />;
    case 'vintage':
      return <VintageIcon className={cn('fill-current w-4 h-4', className)} />;
    default:
      return <Crown className={cn('fill-current w-4 h-4', className)} />;
  }
};
