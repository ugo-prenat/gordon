import { useState, useRef, MouseEvent } from 'react';

type Position = { x: number; y: number };

export const useCardPosition = (disableHover: boolean) => {
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

  const pattern = 'rare-card-bg-pattern.jpg';

  const vars = {
    '--x': `${mouse.x * 100}%`,
    '--y': `${mouse.y * 100}%`,
    '--bg-x': `${gradient.x}%`,
    '--bg-y': `${gradient.y}%`,
    '--step': '5%',
    '--pattern': `url("/assets/${pattern}")`,
    '--rainbow': `repeating-linear-gradient(
      0deg,
      rgb(255, 119, 115) calc(var(--step) * 1),
      rgba(255, 237, 95, 1) calc(var(--step) * 2),
      rgba(168, 255, 95, 1) calc(var(--step) * 3),
      rgba(131, 255, 247, 1) calc(var(--step) * 4),
      rgba(120, 148, 255, 1) calc(var(--step) * 5),
      rgb(216, 117, 255) calc(var(--step) * 6),
      rgb(255, 119, 115) calc(var(--step) * 7)
    ) 0% var(--bg-y) / 200% 700%`,
    '--diagonal': `repeating-linear-gradient(
      128deg,
      #0e152e 0%,
      hsl(180, 10%, 60%) 3.8%,
      hsl(180, 10%, 60%) 4.5%,
      hsl(180, 10%, 60%) 5.2%,
      #0e152e 10%,
      #0e152e 12%
    ) var(--bg-x) var(--bg-y) / 300%`,
    '--shade': `radial-gradient(
      farthest-corner circle at var(--x) var(--y),
      rgba(255, 255, 255, 0.1) 12%,
      rgba(255, 255, 255, 0.15) 20%,
      rgba(255, 255, 255, 0.25) 120%
    ) var(--bg-x) var(--bg-y) / 300%`
  };

  const containerStyle = {
    transform: `perspective(1000px) rotateX(${rotation.y}deg) rotateY(${rotation.x}deg)`,
    transition: 'transform 0.1s',
    ...vars
  };

  return {
    cardRef,
    containerStyle,
    handleMouseMove,
    handleMouseLeave
  };
};
