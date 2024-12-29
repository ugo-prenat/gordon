import { FC, PropsWithChildren } from 'react';

interface IFiltersContainerProps extends PropsWithChildren {}

export const FiltersContainer: FC<IFiltersContainerProps> = ({ children }) => {
  // si useIsMobile true, envoyé <Drawer>

  return (
    <div id="filters-container" className="flex flex-col w-52 gap-8">
      {children}
    </div>
  );
};
