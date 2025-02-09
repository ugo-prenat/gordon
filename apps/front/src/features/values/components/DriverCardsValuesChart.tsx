import { FC } from 'react';
import { useDriverCardsValues } from '../values.api';
import { CardTypeWithValues } from '@gordon/models';
import { ValuesChart } from './ValuesChart';
import { cn } from '@/utils/tailwind.utils';
import { useTranslation } from '@/services/i18n/i18n.hooks';

export const DriverCardsValuesChart: FC<{
  driverId: string;
  type: CardTypeWithValues;
  className?: string;
}> = ({ driverId, type, className }) => {
  const t = useTranslation();
  const { data, isSuccess } = useDriverCardsValues(driverId, type);

  return (
    <div className={cn(className)}>
      <p className="font-bold text-lg mb-6">{t('values.history')}</p>
      {/* {isLoading && <DriverRecordsChartSkeleton />}
      {isError && <DriverRecordsChartError error={error} onRetry={refetch} />} */}
      {isSuccess && <ValuesChart records={data} />}
    </div>
  );
};
