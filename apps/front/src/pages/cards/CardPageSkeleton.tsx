import { DriverCardSkeleton } from '@/features/cards/components/drivers/DriverCardSkeleton';
import { Page } from '@/components/nav/Page';
import { Skeleton } from '@/components/Skeleton';

export const CardPageSkeleton = () => (
  <Page padding>
    <div className="h-full flex justify-center items-center">
      <div className="w-1/2 flex justify-center">
        <div className="w-full sm:mr-6 md:w-4/5 lg:w-2/3 xl:w-1/2">
          <DriverCardSkeleton />
        </div>
      </div>
      <div className="w-1/2 h-full flex flex-col justify-between">
        <Skeleton className="w-1/2 h-[50px]" />
      </div>
    </div>
  </Page>
);
