import { FC } from 'react';
import { AlertVariantProps, AlertTitle, AlertButton } from './ui/alert';
import { Alert as AlertComponent } from './ui/alert';
import {
  AlertCircleIcon,
  AlertTriangleIcon,
  CheckIcon,
  InfoIcon
} from 'lucide-react';
import { IAPIError } from '@gordon/models';
import { cn } from '@/utils/tailwind.utils';
import { useTranslation } from '@/services/i18n/i18n.hooks';

interface IAlertProps {
  text: string;
  severity: AlertVariantProps['variant'];
  className?: string;
  error?: IAPIError;
  action?: () => void;
  actionLabel?: string;
}

export const Alert: FC<IAlertProps> = ({
  text,
  severity,
  className,
  error,
  action,
  actionLabel
}) => {
  const t = useTranslation();

  if (error)
    // TODO: put this in a logger
    console.log('Error thrown by Alert component:', error);

  return (
    <AlertComponent
      variant={severity}
      className={cn(
        'w-full h-fit p-4 flex items-center justify-between',
        { 'py-3': action },
        className
      )}
    >
      <div className="flex items-center gap-2">
        <AlertIcon variant={severity} className="h-5 w-5" />
        <AlertTitle>{text}</AlertTitle>
      </div>
      {action && (
        <AlertButton variant={severity} onClick={action}>
          {actionLabel || t('retry')}
        </AlertButton>
      )}
    </AlertComponent>
  );
};

const AlertIcon: FC<{
  variant: AlertVariantProps['variant'];
  className: string;
}> = ({ variant, className }) => {
  if (variant === 'error') return <AlertCircleIcon className={className} />;
  if (variant === 'info') return <InfoIcon className={className} />;
  if (variant === 'warning') return <AlertTriangleIcon className={className} />;
  if (variant === 'success') return <CheckIcon className={className} />;
  return null;
};
