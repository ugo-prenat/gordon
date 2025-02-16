import { FC, useState } from 'react';
import { useDriverCardsValues } from '../values.api';
import { CardTypeWithValues, DEFAULT_CARD_TYPE } from '@gordon/models';
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
import { CardTypeSelect } from './CardTypeSelect';

export const DriverCardsValuesChart: FC<{
  driverId: string;
  type?: CardTypeWithValues;
  className?: string;
}> = ({ driverId, type, className }) => {
  const t = useTranslation();

  const [timeRange, setTimeRange] = useState<DriverCardsValuesTimeRange>(
    DEFAULT_DRIVER_CARDS_VALUES_TIME_RANGE
  );
  const [cardType, setCardType] = useState<CardTypeWithValues>(
    type || DEFAULT_CARD_TYPE
  );

  const { data, isSuccess, isLoading, isError, error, refetch } =
    useDriverCardsValues(driverId, cardType, timeRange);

  const showCardTypeSelect = !type;
  const isSelectDisabled = isLoading || isError;

  return (
    <div className={cn(className)}>
      <p className="font-bold text-lg mb-4">{t('values.history')}</p>

      <div className="flex mb-4 gap-2">
        <TimeRangeSelect
          range={timeRange}
          onChange={setTimeRange}
          disabled={isSelectDisabled}
        />
        {showCardTypeSelect && (
          <CardTypeSelect
            type={cardType}
            onChange={setCardType}
            disabled={isSelectDisabled}
          />
        )}
      </div>

      {isLoading && <DriverCardsValuesChartSkeleton />}
      {isError && (
        <DriverCardsValuesChartError error={error} onRetry={refetch} />
      )}
      {isSuccess && <ValuesChart records={data} />}
    </div>
  );
};
