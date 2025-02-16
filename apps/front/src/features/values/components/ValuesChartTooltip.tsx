import { FC } from 'react';
import { IFrontDriverCardValue } from '@gordon/models';
import { Flag } from '@/components/Flag';

export const ValuesChartTooltip: FC<{ cardValue: IFrontDriverCardValue }> = ({
  cardValue
}) => {
  const { record, value } = cardValue;
  const { race, result } = record;
  const { countryCode, round } = race;

  const formattedResult = typeof result === 'number' ? `P${result}` : result;

  return (
    <div className="flex flex-col gap-1">
      <p className="font-mono font-bold text-base tabular-nums text-foreground">
        {value.toLocaleString()}
      </p>

      <p className="font-medium">Round {round}</p>
      <div className="flex items-center gap-2">
        <p className="text-muted-foreground">{race.name}</p>
        <Flag className="w-5 h-3 rounded-[2px]" countryCode={countryCode} />
      </div>
      <p className="text-muted-foreground">{formattedResult}</p>
    </div>
  );
};
