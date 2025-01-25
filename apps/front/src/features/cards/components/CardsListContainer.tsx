import { cn } from '@/utils/tailwind.utils';
import { FC, PropsWithChildren } from 'react';

export const CardsListContainer: FC<
  PropsWithChildren & { className?: string }
> = ({ children, className }) => (
  <div
    id="cards-list-container"
    className={cn('flex-1 overflow-auto p-6', className)}
  >
    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-6">
      {children}
    </div>
  </div>
);
