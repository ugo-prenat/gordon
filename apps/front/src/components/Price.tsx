import { cn } from '@/utils/tailwind.utils';
import { FC } from 'react';

export const Price: FC<{ value: number; className?: string }> = ({
  value,
  className
}) => (
  <p
    className={cn(
      'font-mono font-bold text-base tabular-nums text-foreground',
      className
    )}
  >
    {value.toLocaleString()}
    <span className="text-muted-foreground/80 font-bold text-sm ml-0.5">
      Cr
    </span>
  </p>
);
