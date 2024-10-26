import { useState, useRef, MouseEvent, CSSProperties } from 'react';

type Position = { x: number; y: number };

export const useCardPositions = (disableHover: boolean) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const [positions, setPositions] = useState<{
    rotation: Position;
    gradient: Position;
    mouse: Position;
  }>({
    rotation: { x: 0, y: 0 },
    gradient: { x: 50, y: 50 },
    mouse: { x: 0, y: 0 }
  });

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || disableHover) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    let width = card.clientWidth;
    let height = card.clientHeight;

    let x = (event.clientX - rect.left) / width;
    let y = (event.clientY - rect.top) / height;

    const rotateX = -(x - 0.5) * 26;
    const rotateY = (y - 0.5) * 26;
    const gradientX = 40 + 20 * x;
    const gradientY = 40 + 20 * y;

    setPositions({
      rotation: { x: rotateX, y: rotateY },
      gradient: { x: gradientX, y: gradientY },
      mouse: { x, y }
    });
  };

  const handleMouseLeave = () =>
    setPositions({
      rotation: { x: 0, y: 0 },
      gradient: { x: 50, y: 50 },
      mouse: { x: 0, y: 0 }
    });

  const { mouse, gradient, rotation } = positions;

  const bgPositions = {
    '--bg-x': `${gradient.x}%`,
    '--bg-y': `${gradient.y}%`
  } as CSSProperties;

  const rotPositions = {
    '--rotation-x': `${rotation.x}deg`,
    '--rotation-y': `${rotation.y}deg`
  } as CSSProperties;

  const mousePositions = {
    '--x': `${mouse.x * 100}%`,
    '--y': `${mouse.y * 100}%`
  } as CSSProperties;

  return {
    cardRef,
    bgPositions,
    rotPositions,
    mousePositions,
    handleMouseMove,
    handleMouseLeave
  };
};
