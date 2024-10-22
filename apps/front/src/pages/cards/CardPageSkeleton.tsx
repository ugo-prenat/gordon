import { DriverCardSkeleton } from '@/components/cards/drivers/DriverCardSkeleton';
import { Page } from '@/components/nav/Page';
import { Skeleton } from '@/components/Skeleton';

export const CardPageSkeleton = () => (
  <Page padding>
    <div className="h-full flex justify-center items-center gap-10">
      <div className="w-1/2 flex justify-center">
        <div className="w-full md:w-4/5 lg:w-2/3 xl:w-1/2">
          <DriverCardSkeleton />
        </div>
      </div>
      <div className="flex-1 h-full ">
        <Skeleton className="w-full h-[50px]" />
      </div>
    </div>
  </Page>
);
