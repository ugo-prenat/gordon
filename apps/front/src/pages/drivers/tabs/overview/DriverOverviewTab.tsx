import { DriverRecordsChart } from '@/features/records/components/recordsChart/DriverRecordsChart';
import { DriverHero } from './hero/DriverHero';
import { useDriver } from '../../drivers.api';
import { driverRoute } from '@/services/router/router.routes';
import { DriverPicture } from '@/components/pictures/DriverPicture';
import { Skeleton } from '@/components/Skeleton';
import { Alert } from '@/components/Alert';
import { useTranslation } from '@/services/i18n/i18n.hooks';
import { FC } from 'react';
import { IAPIError } from '@gordon/models';

export const DriverOverviewTab = () => {
  const { id } = driverRoute.useParams();

  const { data: driver, isPending, isError, error, refetch } = useDriver(id);

  if (isPending) return <DriverOverviewTabSkeleton />;

  if (isError)
    return <DriverOverviewTabError error={error} refetch={refetch} />;

  return (
    <>
      <DriverHero driver={driver} />
      <DriverRecordsChart driverId={id} />
    </>
  );
};

const DriverOverviewTabSkeleton = () => {
  return (
    <div className="relative w-full h-[450px] flex justify-between items-end border-b">
      <div className="w-1/2 ml-7 mb-10">
        <Skeleton className="w-full h-[80px] mb-4" />
        <Skeleton className="w-4/5 h-[20px]" />
      </div>
      <div className="overflow-hidden">
        <DriverPicture id="placeholder" pictureUrl="" placeholder />
      </div>
    </div>
  );
};

const DriverOverviewTabError: FC<{ error: IAPIError; refetch: () => void }> = ({
  error,
  refetch
}) => {
  const t = useTranslation();

  return (
    <div className="m-4">
      <Alert
        error={error}
        severity="error"
        action={refetch}
        text={t(
          `page.driver.retrieve.${error.status === 404 ? 'notFound' : 'error'}`
        )}
      />
    </div>
  );
};
