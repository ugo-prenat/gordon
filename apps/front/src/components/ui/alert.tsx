import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@utils/tailwind.utils';
import { Button } from './button';

const alertVariants = cva('w-full rounded-lg border p-4', {
  variants: {
    variant: {
      default: 'bg-background text-foreground',
      error:
        'border-destructive/50 text-destructive bg-destructive/20 dark:bg-destructive/10 [&>svg]:text-destructive',
      info: 'border-info/50 text-info bg-info/20 dark:bg-info/10 [&>svg]:text-info',
      warning:
        'border-warning/50 text-warning bg-warning/20 dark:bg-warning/10 [&>svg]:text-warning',
      success:
        'border-success/50 text-success bg-success/20 dark:bg-success/10 [&>svg]:text-success'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
});

export type AlertVariantProps = VariantProps<typeof alertVariants>;

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & AlertVariantProps
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
));
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn('font-medium leading-none tracking-tight', className)}
    {...props}
  />
));
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('text-sm', className)} {...props} />
));
AlertDescription.displayName = 'AlertDescription';

const AlertButton = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement> & AlertVariantProps
>(({ className, variant, ...props }, ref) => (
  <Button
    ref={ref}
    variant="ghost"
    className={cn('font-semibold px-3 py-1', className, {
      'hover:text-destructive hover:bg-destructive/10': variant === 'error',
      'hover:text-info hover:bg-info/10': variant === 'info',
      'hover:text-warning hover:bg-warning/10': variant === 'warning',
      'hover:text-success hover:bg-success/10': variant === 'success'
    })}
    {...props}
  />
));
AlertButton.displayName = 'AlertButton';

export { Alert, AlertTitle, AlertDescription, AlertButton };
