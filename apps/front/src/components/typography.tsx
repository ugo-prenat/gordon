import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import { cn } from '@utils/tailwind.utils';

export const H1: FC<PropsWithChildren> = ({ children }) => (
  <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
    {children}
  </h1>
);

export const Title: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
  ...props
}) => (
  <h2 className={cn('text-3xl font-bold tracking-tight', className)} {...props}>
    {children}
  </h2>
);

export const Description: FC<HTMLAttributes<HTMLParagraphElement>> = ({
  children,
  className,
  ...props
}) => (
  <p className={cn('text-sm text-muted-foreground', className)} {...props}>
    {children}
  </p>
);

export const P: FC<PropsWithChildren> = ({ children }) => (
  <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>
);

export const Price: FC<PropsWithChildren & { className?: string }> = ({
  children,
  className
}) => (
  <p
    className={cn(
      'font-mono font-bold text-base tabular-nums text-foreground',
      className
    )}
  >
    {children}
  </p>
);
