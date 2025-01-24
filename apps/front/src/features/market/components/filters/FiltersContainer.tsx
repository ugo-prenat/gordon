import { FC, PropsWithChildren } from 'react';

interface IFiltersContainerProps extends PropsWithChildren {}

export const FiltersContainer: FC<IFiltersContainerProps> = ({ children }) => {
  // si useIsMobile true, envoyé <Drawer>

  return (
    <div
      id="filters-container"
      className="flex flex-col w-64 gap-8 sticky top-[4.6rem] h-full"
    >
      {children}
    </div>
  );
};
