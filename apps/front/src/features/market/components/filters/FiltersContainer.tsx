import { FC, PropsWithChildren } from 'react';

interface IFiltersContainerProps extends PropsWithChildren {}

export const FiltersContainer: FC<IFiltersContainerProps> = ({ children }) => {
  // si useIsMobile true, envoyé <Drawer>

  return (
    <div id="filters-container" className="p-6 w-72 h-full overflow-auto">
      <div className="flex flex-col gap-6">{children}</div>
    </div>
  );
};
