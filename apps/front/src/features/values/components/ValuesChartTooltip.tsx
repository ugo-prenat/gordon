import { FC } from 'react';
import { IFrontDriverCardValue } from '@gordon/models';
import { Flag } from '@/components/Flag';

export const ValuesChartTooltip: FC<{ cardValue: IFrontDriverCardValue }> = ({
  cardValue
}) => {
  const { record, value } = cardValue;
  const { race, result } = record;
  const { countryCode } = race;

  return (
    <div className="flex flex-col gap-1">
      <span className="font-mono font-bold text-sm tabular-nums text-foreground">
        {value.toLocaleString()}
      </span>

      <Flag className="w-5 h-3" countryCode={countryCode} />
      <span className="text-xs text-muted-foreground">{race.name}</span>
      <span className="text-xs text-muted-foreground">{result}</span>
    </div>
  );
};
