import { CardType } from '@gordon/models';
import { CrownIcon } from 'lucide-react';

export const CardTypeLogo = ({ type }: { type: CardType }) => {
  return <CrownIcon className="w-4" />;
};
