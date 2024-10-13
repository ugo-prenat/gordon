import { FC, PropsWithChildren } from 'react';
import { ScrollArea } from '../ui/scroll-area';

export const CardsListContainer: FC<PropsWithChildren> = ({ children }) => (
  <ScrollArea>
    <div
      id="cards-list-container"
      className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4"
    >
      {children}
    </div>
  </ScrollArea>
);
