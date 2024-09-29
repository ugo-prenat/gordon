import { FC } from 'react';
import { useDriverRecords } from '../../../drivers.api';
import { useTranslation } from '@/services/i18n/i18n.hooks';
import { RecordsChart } from './driverRecordsChartComponents';

export const DriverRecordsChart: FC<{ driverId: string }> = ({ driverId }) => {
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
    <div id="driver-records-chart" className="px-6 py-10">
      <p className="font-bold text-xl mb-6">{t('records')}</p>
      <RecordsChart records={records} />
    </div>
  );
};
