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
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    const rX = -(x - 0.5) * 26;
    const rY = (y - 0.5) * 26;
    const bgX = 40 + 20 * x;
    const bgY = 40 + 20 * y;

    setPositions({
      rotation: { x: rX, y: rY },
      gradient: { x: bgX, y: bgY },
      mouse: { x, y }
    });

    // const rect = card.getBoundingClientRect();
    // const x = event.clientX - rect.left;
    // const y = event.clientY - rect.top;

    // const centerX = rect.width / 2;
    // const centerY = rect.height / 2;

    // const rotateX = (y - centerY) / 20;
    // const rotateY = (centerX - x) / 20;

    // const gradientX = (x / rect.width) * 100;
    // const gradientY = (y / rect.height) * 100;

    // setPositions({
    //   rotation: { x: rotateX, y: rotateY },
    //   gradient: { x: gradientX, y: gradientY }
    // });
  };

  const handleMouseLeave = () =>
    setPositions({
      rotation: { x: 0, y: 0 },
      gradient: { x: 50, y: 50 },
      mouse: { x: 0, y: 0 }
    });

  const containerStyle = {
    transform: `perspective(1000px) rotateX(${positions.rotation.x}deg) rotateY(${positions.rotation.y}deg)`,
    transition: 'transform 0.1s',
    '--x': `${positions.mouse.x * 100}%`,
    '--y': `${positions.mouse.y * 100}%`,
    '--bg-x': `${positions.gradient.x}%`,
    '--bg-y': `${positions.gradient.y}%`,
    '--r-x': `${positions.rotation.x}deg`,
    '--r-y': `${positions.rotation.y}deg`,
    '--step': '5%',
    '--pattern':
      "url('http://allyourhtml.club/carousel/pattern.webp') center / 75%",
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

  // const gradientStyle = {
  //   background: `radial-gradient(circle at ${positions.gradient.x}% ${positions.gradient.y}%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 50%)`
  // };

  // const moreStyle = {

  // };

  const cardLayer1Style = {
    position: 'absolute',
    inset: 0,
    zIndex: 20,
    mixBlendMode: 'soft-light',
    background: `radial-gradient(
      farthest-corner circle at ${positions.gradient.x}% ${positions.gradient.y}%,
      rgba(255, 255, 255, 0.8) 10%,
      rgba(255, 255, 255, 0.65) 20%,
      rgba(255, 255, 255, 0) 90%
    )`
  };

  const cardLayer2Style = {
    position: 'absolute',
    inset: 0,
    zIndex: 30,
    mixBlendMode: 'color-dodge',
    willChange: 'background',
    transitionProperty: 'opacity',
    backgroundBlendMode: 'hue, hue, hard-light, overlay',
    background: `var(--pattern), , var(--diagonal)`,
    backgroundPosition: `center, 0% ${positions.gradient.y}%, ${positions.gradient.x}% ${positions.gradient.y}%`,
    '::after': {
      content: "''",
      position: 'absolute',
      inset: 0,
      background:
        'var(--pattern), var(--rainbow), var(--diagonal), var(--shade)',
      mixBlendMode: 'darken',
      backgroundSize: '75%, 200% 400%, 800%, 200%',
      backgroundPosition: `center, 0% ${positions.gradient.y}%, calc(${positions.gradient.x}% * -1) calc(${positions.gradient.y}% * -1), ${positions.gradient.x}% ${positions.gradient.y}%`,
      backgroundBlendMode: 'soft-light, hue, hard-light'
    }
  };

  return {
    cardRef,
    containerStyle,
    cardLayer1Style,
    cardLayer2Style,
    handleMouseMove,
    handleMouseLeave
  };
};
