import { cn } from '@/utils/tailwind.utils';
import NumberFlow from '@number-flow/react';
import { FC, useEffect, useState } from 'react';

type TextColor = 'positive' | 'negative' | 'default';

interface IPriceProps {
  value: number;
  percentage?: number;
  className?: string;
  initialAnimate?: boolean;
  colorAnimation?: boolean;
}

export const Price: FC<IPriceProps> = ({
  value,
  percentage = 0,
  className,
  initialAnimate = false,
  colorAnimation = false
}) => {
  const [textColor, setTextColor] = useState<TextColor>(
    buildTextColor(percentage, colorAnimation)
  );
  const [number, setNumber] = useState(
    calculateNumber(value, percentage, initialAnimate)
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      colorAnimation && setTextColor('default');
    }, 400);

    return () => clearTimeout(timer);
  }, [value]);

  useEffect(() => {
    const timer = setTimeout(() => {
      initialAnimate && setNumber(value);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setNumber(calculateNumber(value, percentage, initialAnimate));
    colorAnimation && setTextColor(buildTextColor(percentage, colorAnimation));
  }, [value]);

  return (
    <p
      className={cn(
        'font-mono font-bold text-base tabular-nums text-foreground transition-colors duration-300',
        className,
        {
          'text-success': textColor === 'positive',
          'text-destructive': textColor === 'negative',
          'text-foreground': textColor === 'default'
        }
      )}
    >
      <NumberFlow
        value={number}
        spinTiming={{
          duration: 753.6,
          easing:
            'linear(0, 0.0007 0.35%, 0.0057 1.06%, 0.0216 2.11%, 0.0554, 0.1002 4.93%, 0.196 7.39%, 0.5429 15.49%, 0.6469, 0.7361, 0.8099, 0.869, 0.9149 29.58%, 0.953, 0.9794, 0.9967 39.09%, 1.008 42.61%, 1.014 46.83%, 1.0144 53.52%, 1.0055 68.31%, 1.0018 77.47%, 0.9998 99.65%)'
        }}
      />
      <span className="text-muted-foreground/80 font-bold text-sm ml-0.5">
        Cr
      </span>
    </p>
  );
};

const buildTextColor = (
  percentage: number,
  colorAnimation: boolean
): TextColor => {
  if (!colorAnimation) return 'default';
  if (percentage === 0) return 'default';
  return percentage > 0 ? 'positive' : 'negative';
};

const calculateNumber = (
  value: number,
  percentage: number,
  initialAnimate: boolean
) => (initialAnimate ? Math.round(value * (1 - percentage / 100)) : value);
