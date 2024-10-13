import { useState, useEffect, useRef } from 'react';
import './test.css';
import { buildImgUrl } from '@/utils/images.utils';

export const Prout = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePosition({ x, y });
    };

    card.addEventListener('mousemove', handleMouseMove);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const rX = -(mousePosition.x - 0.5) * 26;
  const rY = (mousePosition.y - 0.5) * 26;
  const bgX = 40 + 20 * mousePosition.x;
  const bgY = 40 + 20 * mousePosition.y;

  const cardStyle = {
    '--x': `${mousePosition.x * 100}%`,
    '--y': `${mousePosition.y * 100}%`,
    '--bg-x': `${bgX}%`,
    '--bg-y': `${bgY}%`,
    '--r-x': `${rX}deg`,
    '--r-y': `${rY}deg`,
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
  } as React.CSSProperties;

  return (
    <div className="card" ref={cardRef} style={cardStyle}>
      <div className="card__wrapper">
        <div className="card__3d">
          <div className="card__image">
            <img
              src={buildImgUrl(
                '/v1728766755/victor_martins_24_z5gxau.png',
                `c_fill,w_500,ar_4:5`
              )}
              className="absolute inset-0 z-50"
            />
            {/* <img
              src="https://images.pokemontcg.io/swsh12/49_hires.png"
              alt=""
            /> */}
            <img src="http://allyourhtml.club/carousel/image.webp" alt="" />
          </div>
          <div className="card__layer1"></div>
          <div className="card__layer2"></div>
        </div>
      </div>
    </div>
  );
};
