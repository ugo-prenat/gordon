import { FC, PropsWithChildren } from 'react';
import { useIsMobile } from '@/hooks/useIsMobile';
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { useTranslation } from '@/services/i18n/i18n.hooks';

interface IFiltersContainerProps extends PropsWithChildren {}

export const FiltersContainer: FC<IFiltersContainerProps> = ({ children }) => {
  const t = useTranslation();
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Drawer>
        <DrawerTrigger
          className="fixed bottom-[30px] left-1/2 -translate-x-1/2 z-10"
          asChild
        >
          <Button variant="default" className="px-4 py-2.5 font-bold">
            <Filter className="w-4 h-4 mr-2.5" fill="currentColor" />
            {t('page.market.filters.title')}
          </Button>
        </DrawerTrigger>
        <DrawerContent className="h-4/5">
          <VisuallyHidden asChild>
            <DrawerTitle />
          </VisuallyHidden>
          <div className="overflow-auto h-full">
            <div className="flex flex-col gap-6 px-6 pb-6">{children}</div>
          </div>
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
