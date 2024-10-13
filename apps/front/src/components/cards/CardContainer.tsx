import { FC, PropsWithChildren } from 'react';
import { useCardPosition } from './cards.hooks';

interface ICardContainerProps extends PropsWithChildren {
  disableHover?: boolean;
}

export const CardContainer: FC<ICardContainerProps> = ({
  disableHover = false,
  children
}) => {
  const {
    cardRef,
    containerStyle,
    gradientStyle,
    handleMouseMove,
    handleMouseLeave,
    moreStyle
  } = useCardPosition(disableHover);

  return (
    <div
      ref={cardRef}
      id="driver-card"
      style={{ ...containerStyle }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="max-w-[400px] bg-muted rounded-lg relative overflow-hidden"
    >
      <div
        id="gradient"
        style={gradientStyle}
        className="absolute inset-0 mix-blend-soft-light z-20"
      />
      <div
        id="pattern"
        style={moreStyle as React.CSSProperties}
        className="absolute inset-0 z-30"
      />
      {children}
    </div>
  );
};
