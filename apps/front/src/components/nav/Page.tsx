import { cn } from '@/utils/tailwind.utils';
import { FC, HTMLAttributes, useEffect } from 'react';
import { PropsWithChildren } from 'react';
import { Title } from '../typography';

interface IPageProps extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {
  title?: string;
  tabTitle?: string;
  padding?: boolean;
}

export const Page: FC<IPageProps> = ({
  children,
  className,
  title,
  tabTitle,
  padding = false,
  ...props
}) => {
  useEffect(() => {
    if (tabTitle) document.title = `${tabTitle} • Gordon`;
  }, [tabTitle]);

  return (
    <div
      id="page"
      className={cn(
        'w-full max-w-full h-full max-h-full flex flex-col',
        { 'p-6': padding },
        className
      )}
      {...props}
    >
      {title && <Title className="mb-6">{title}</Title>}

      <div className="h-full">{children}</div>
    </div>
  );
};
