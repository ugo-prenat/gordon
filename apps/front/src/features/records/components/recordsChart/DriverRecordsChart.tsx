import { FC } from 'react';
import { useTranslation } from '@/services/i18n/i18n.hooks';
import { RecordsChart } from './driverRecordsChartComponents';
import { cn } from '@/utils/tailwind.utils';
import { useDriverRecords } from '../../records.api';

export const DriverRecordsChart: FC<{
  driverId: string;
  className?: string;
}> = ({ driverId, className }) => {
  const t = useTranslation();
  const {
    data: records,
    isPending,
    isError,
    error
  } = useDriverRecords(driverId);

  if (isPending) return <div>Loading records...</div>;

  if (isError)
    return (
      <div>
        Error: {error.message} code: {error.code}
      </div>
    );

  return (
    <div id="driver-records-chart" className={cn('px-6 py-10', className)}>
      <p className="font-bold text-lg mb-6">{t('records')}</p>
      <RecordsChart records={records} />
    </div>
  );
};
