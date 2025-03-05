import { Slider } from '@/components/ui/slider';
import { useState } from 'react';
import NumberFlow from '@number-flow/react';

type Values = { min: number; max: number };

interface IValuesFilterProps {
  onChange: (props: Values) => void;
  value: Partial<Values> | undefined;
}

export const ValuesFilter = ({ onChange, value }: IValuesFilterProps) => {
  const MAX_POSSIBLE_CARD_VALUE = 300000;

  const [values, setValues] = useState<Values>({
    min: value?.min || 0,
    max: value?.max || MAX_POSSIBLE_CARD_VALUE
  });

  const handleSliderChange = (values: number[]) =>
    setValues({ min: values[0]!, max: values[1]! });

  const handleSlidingFinished = () =>
    onChange({ min: values.min, max: values.max });

  return (
    <div>
      <div className="flex gap-4 justify-between mb-3">
        <div>
          <NumberFlow
            value={values.min}
            className="font-mono font-bold text-sm"
          />
          <span className="text-muted-foreground/80 text-sm ml-0.5">Cr</span>
        </div>

        <div>
          <NumberFlow
            value={values.max}
            className="font-mono font-bold text-sm"
          />
          <span className="text-muted-foreground/80 text-sm ml-0.5">Cr</span>
        </div>
      </div>
      <Slider
        min={0}
        step={10000}
        max={MAX_POSSIBLE_CARD_VALUE}
        onValueChange={handleSliderChange}
        onValueCommit={handleSlidingFinished}
        defaultValue={[values.min, values.max]}
      />
    </div>
  );
};
