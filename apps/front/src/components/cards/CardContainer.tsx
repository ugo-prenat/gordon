import { CSSProperties, FC, PropsWithChildren } from 'react';
import { useCardPosition } from './cards.hooks';

import './cards.css';
import { CardType } from '@gordon/models';
import { cn } from '@/utils/tailwind.utils';

interface ICardContainerProps extends PropsWithChildren {
  type: CardType;
  disableHover?: boolean;
}

export const CardContainer: FC<ICardContainerProps> = ({
  type,
  disableHover = false,
  children
}) => {
  const {
    cardRef,
    bgPositions,
    rotPositions,
    mousePositions,
    handleMouseMove,
    handleMouseLeave
  } = useCardPosition(disableHover);

  // see cards.css
  return (
    <div
      ref={cardRef}
      id="driver-card"
      style={rotPositions}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'relative max-w-[400px] rounded-lg overflow-hidden border border-border/50',
        {
          'bg-card-rare': type === 'rare',
          'bg-card-common': type === 'common',
          'bg-card-unique': type === 'unique',
          'bg-card-vintage': type === 'vintage',
          'bg-card-champion': type === 'champion'
        }
      )}
    >
      <div className="z-50 relative">
        <div>{children}</div>
      </div>
      <div id="gradient" style={mousePositions} />
      <div
        id="pattern"
        style={
          {
            ...bgPositions,
            ...mousePositions,
            '--pattern': `url('/assets/cards/${type}-pattern.png')`
          } as CSSProperties
        }
      />
    </div>
  );
};
