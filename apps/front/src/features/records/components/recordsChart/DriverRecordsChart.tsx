import { FC } from 'react';
import { useTranslation } from '@/services/i18n/i18n.hooks';
import {
  RecordsChart,
  ScrollableContainer
} from './driverRecordsChartComponents';
import { cn } from '@/utils/tailwind.utils';
import { useDriverRecords } from '../../records.api';
import { IAPIError } from '@gordon/models';
import { Skeleton } from '@/components/Skeleton';
import { Alert } from '@/components/Alert';

export const DriverRecordsChart: FC<{
  driverId: string;
  className?: string;
}> = ({ driverId, className }) => {
  const t = useTranslation();
  const {
    data: records,
    isPending,
    isSuccess,
    isError,
    error,
    refetch
  } = useDriverRecords(driverId);

  return (
    <div id="driver-records-chart" className={cn('px-6 py-10', className)}>
      <p className="font-bold text-lg mb-6">{t('records')}</p>
      {isPending && <DriverRecordsChartSkeleton />}
      {isError && <DriverRecordsChartError error={error} onRetry={refetch} />}
      {isSuccess && <RecordsChart records={records} />}
    </div>
  );
};

const DriverRecordsChartSkeleton = () => (
  <ScrollableContainer>
    <div className="flex items-end gap-2">
      {Array.from({ length: 50 }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col h-full"
          style={{ height: `${Math.floor(Math.random() * 91 + 10)}%` }}
        >
          <Skeleton className="flex-grow w-7" />
          <p className="h-8"></p>
        </div>
      ))}
    </div>
  </ScrollableContainer>
);

const DriverRecordsChartError: FC<{
  error: IAPIError;
  onRetry: () => void;
}> = ({ error, onRetry }) => {
  const t = useTranslation();
  return (
    <div>
      <Alert
        severity="error"
        text={t('driver.records.retrieve.error')}
        error={error}
        action={onRetry}
      />
    </div>
  );
};
