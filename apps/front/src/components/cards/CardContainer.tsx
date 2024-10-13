import { FC, PropsWithChildren } from 'react';
import { useCardPosition } from './cards.hooks';

import './cards.css';

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
    cardLayer1Style,
    cardLayer2Style,
    handleMouseMove,
    handleMouseLeave
  } = useCardPosition(disableHover);

  return (
    <div
      ref={cardRef}
      id="driver-card"
      style={containerStyle as React.CSSProperties}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative max-w-[400px] bg-background rounded-lg overflow-hidden"
    >
      <div className="z-50 relative">
        <div>{children}</div>
        <div className="inset-0 z-10"></div>
      </div>

      <div
        id="gradient"
        style={cardLayer1Style as React.CSSProperties}
        className="card__layer1"
        // className="absolute inset-0 mix-blend-soft-light z-20"
      />
      <div
        id="pattern"
        style={cardLayer2Style as React.CSSProperties}
        className="card__layer2"
        // className="absolute inset-0 z-30"
      />
    </div>
  );
};
