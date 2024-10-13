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
  const { cardRef, containerStyle, handleMouseMove, handleMouseLeave } =
    useCardPosition(disableHover);

  return (
    <div
      ref={cardRef}
      id="driver-card"
      style={containerStyle as React.CSSProperties}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative max-w-[400px] bg-[hsl(224,71.4%,4.1%)] rounded-lg overflow-hidden"
    >
      <div className="z-50 relative">
        <div>{children}</div>
      </div>
      <div id="gradient" /> {/* see cards.css */}
      <div id="pattern">{/* see cards.css */}</div>
    </div>
  );
};
