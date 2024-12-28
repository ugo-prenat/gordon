import { FC, PropsWithChildren } from 'react';

export const CardsListContainer: FC<PropsWithChildren> = ({ children }) => (
  <div
    id="cards-list-container"
    className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] flex-1 gap-6"
  >
    {children}
  </div>
);
