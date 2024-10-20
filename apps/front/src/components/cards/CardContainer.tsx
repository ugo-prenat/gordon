import { CSSProperties, FC, PropsWithChildren } from 'react';
import { useCardPosition } from './cards.hooks';

import './cards.css';
import { CardType } from '@gordon/models';

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
      className="relative max-w-[400px] bg-foreground dark:bg-background rounded-lg overflow-hidden border border-border/50"
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
