import { cn } from '@/utils/tailwind.utils';
import { FC, HTMLAttributes } from 'react';
import { PropsWithChildren } from 'react';
import { Title } from '../typography';

interface IPageProps extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export const Page: FC<IPageProps> = ({
  children,
  className,
  title,
  ...props
}) => {
  return (
    <div
      id="page"
      className={cn(
        'w-full max-w-full h-full max-h-full flex flex-col',
        className
      )}
      {...props}
    >
      {title && <Title className="mb-6">{title}</Title>}

      <div className="h-full">{children}</div>
    </div>
  );
};
