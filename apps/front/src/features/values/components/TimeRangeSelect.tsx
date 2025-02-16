import { Select, SelectOption } from '@/components/Select';
import { useTranslation } from '@/services/i18n/i18n.hooks';
import { FC } from 'react';
import {
  DRIVER_CARDS_VALUES_TIME_RANGE_OPTIONS,
  DriverCardsValuesTimeRange
} from '@gordon/models';

export const TimeRangeSelect: FC<{
  range: DriverCardsValuesTimeRange;
  onChange: (range: DriverCardsValuesTimeRange) => void;
  disabled: boolean;
}> = ({ range, onChange, disabled }) => {
  const t = useTranslation();

  const options: SelectOption<DriverCardsValuesTimeRange>[] =
    DRIVER_CARDS_VALUES_TIME_RANGE_OPTIONS.map((option) => ({
      value: option,
      label: t(`driver.values.timeRange.${option}`)
    }));

  return (
    <Select
      value={range}
      options={options}
      onChange={onChange}
      disabled={disabled}
      label={t('driver.values.timeRange')}
    />
  );
};
