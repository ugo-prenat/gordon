import { cn } from '@/utils/tailwind.utils';
import { FC } from 'react';

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

export const ShinyText: FC<ShinyTextProps> = ({
  text,
  className,
  speed = 3,
  disabled = false
}) => (
  <div
    className={cn(
      'text-muted-foreground/50 text-lg bg-clip-text inline-block bg-[linear-gradient(120deg,rgba(0,0,0,0)_40%,rgba(0,0,0,0.4)_50%,rgba(0,0,0,0)_60%)] dark:bg-[linear-gradient(120deg,rgba(255,255,255,0)_40%,rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)_60%)] bg-[length:200%_100%] [-webkit-background-clip:text]',
      { 'animate-shine': !disabled },
      className
    )}
    style={{ animationDuration: `${speed}s` }}
  >
    {text}
  </div>
);
