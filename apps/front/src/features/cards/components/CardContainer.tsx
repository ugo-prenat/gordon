import { CSSProperties, FC, PropsWithChildren } from 'react';
import { CardType, Resource } from '@gordon/models';
import { cn } from '@/utils/tailwind.utils';
import { AspectRatio } from '../../../components/ui/aspect-ratio';
import { useCardPositions } from '@/features/cards/hooks/useCardPositions.hooks';

import '../cards.css';

interface ICardContainerProps extends PropsWithChildren {
  resource: Resource;
  type?: CardType;
  disableHover?: boolean;
}

export const CardContainer: FC<ICardContainerProps> = ({
  resource,
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
  } = useCardPositions(disableHover);

  // see cards.css
  return (
    <div
      ref={cardRef}
      id={`${resource}-card`}
      style={rotPositions}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'relative rounded-lg overflow-hidden border border-border/50 transition-transform duration-300 ease-out bg-foreground dark:bg-background noselect',
        {
          '!bg-card-rare': type === 'rare',
          '!bg-card-common': type === 'common',
          '!bg-card-unique': type === 'unique',
          '!bg-card-vintage': type === 'vintage',
          '!bg-card-champion': type === 'champion'
        }
      )}
    >
      <AspectRatio ratio={4 / 5}>
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
      </AspectRatio>
    </div>
  );
};
