import { FC, useState } from 'react';
import { useDriverCardsValues } from '../values.api';
import { CardTypeWithValues } from '@gordon/models';
import { cn } from '@/utils/tailwind.utils';
import { useTranslation } from '@/services/i18n/i18n.hooks';
import { DriverCardsValuesChartError } from './DriverCardsValuesChartError';
import { ValuesChart } from './ValuesChart';
import { DriverCardsValuesChartSkeleton } from './DriverCardsValuesChartSkeleton';
import { TimeRangeSelect } from './TimeRangeSelect';
import {
  DEFAULT_DRIVER_CARDS_VALUES_TIME_RANGE,
  DriverCardsValuesTimeRange
} from '@gordon/models';

export const DriverCardsValuesChart: FC<{
  driverId: string;
  type: CardTypeWithValues;
  className?: string;
}> = ({ driverId, type, className }) => {
  const t = useTranslation();

  const [timeRange, setTimeRange] = useState<DriverCardsValuesTimeRange>(
    DEFAULT_DRIVER_CARDS_VALUES_TIME_RANGE
  );

  const { data, isSuccess, isLoading, isError, error, refetch } =
    useDriverCardsValues(driverId, type, timeRange);

  const isSelectDisabled = isLoading || isError;

  return (
    <div className={cn(className)}>
      <p className="font-bold text-lg mb-6">{t('values.history')}</p>

      <div className="flex justify-end mb-2">
        <TimeRangeSelect
          range={timeRange}
          onChange={setTimeRange}
          disabled={isSelectDisabled}
        />
      </div>

      {isLoading && <DriverCardsValuesChartSkeleton />}
      {isError && (
        <DriverCardsValuesChartError error={error} onRetry={refetch} />
      )}
      {isSuccess && <ValuesChart records={data} />}
    </div>
  );
};
