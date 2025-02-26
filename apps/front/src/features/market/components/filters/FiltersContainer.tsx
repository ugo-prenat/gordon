import { FC, PropsWithChildren } from 'react';
import { useIsMobile } from '@/hooks/useIsMobile';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';

interface IFiltersContainerProps extends PropsWithChildren {}

export const FiltersContainer: FC<IFiltersContainerProps> = ({ children }) => {
  // si useIsMobile true, envoyé <Drawer>

  const isMobile = useIsMobile();

  console.log({ isMobile });

  if (isMobile) {
    return (
      <Drawer>
        <DrawerTrigger
          className="fixed bottom-[30px] left-1/2 -translate-x-1/2 z-10"
          asChild
        >
          <Button variant="default" className="px-3 py-2 font-bold">
            <Filter className="w-4 h-4 mr-2" fill="currentColor" />
            Filters
          </Button>
        </DrawerTrigger>
        <DrawerContent className="h-2/3">
          <div className="flex flex-col gap-6 px-6">{children}</div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <div id="filters-container" className="p-6 w-72 h-full overflow-auto">
      <div className="flex flex-col gap-6">{children}</div>
    </div>
  );
};
