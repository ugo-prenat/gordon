import { cn } from '@/utils/tailwind.utils';
import { FC } from 'react';

interface ISkeletonProps {
  className: string;
}

export const Skeleton: FC<ISkeletonProps> = ({ className }) => (
  <div
    className={cn(
      'bg-[linear-gradient(70deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-muted dark:bg-muted/30 relative overflow-hidden rounded-lg bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat animate-skeleton',
      className
    )}
  />
);
