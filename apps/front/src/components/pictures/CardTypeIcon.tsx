import { ChampionIcon } from '@/assets/cardTypes/ChampionIcon';
import { CommonIcon } from '@/assets/cardTypes/CommonIcon';
import { RareIcon } from '@/assets/cardTypes/RareIcon';
import { UniqueIcon } from '@/assets/cardTypes/UniqueIcon';
import { VintageIcon } from '@/assets/cardTypes/VintageIcon';
import { CardType } from '@gordon/models';
import { CrownIcon } from 'lucide-react';

export const CardTypeIcon = ({
  type,
  className
}: {
  type: CardType;
  className?: string;
}) => {
  switch (type) {
    case 'common':
      return <CommonIcon className={className} />;
    case 'rare':
      return <RareIcon className={className} />;
    case 'unique':
      return <UniqueIcon className={className} />;
    case 'champion':
      return <ChampionIcon className={className} />;
    case 'vintage':
      return <VintageIcon className={className} />;
    default:
      return <CrownIcon className={className} />;
  }
};
