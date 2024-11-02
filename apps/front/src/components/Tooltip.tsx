import { FC, PropsWithChildren } from 'react';
import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Tooltip as TooltipUI
} from './ui/tooltip';

interface ITooltipProps extends PropsWithChildren {
  title?: string;
  className?: string;
}

export const Tooltip: FC<ITooltipProps> = ({ children, title, className }) => {
  if (!title) return <div className={className}>{children}</div>;
  return (
    <TooltipProvider delayDuration={200}>
      <TooltipUI>
        <TooltipTrigger className={className}>{children}</TooltipTrigger>
        <TooltipContent>{title}</TooltipContent>
      </TooltipUI>
    </TooltipProvider>
  );
};
