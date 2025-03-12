import { FC } from 'react';
import { IFrontDriverCardValue } from '@gordon/models';
import { Flag } from '@/components/Flag';
import { useTranslation } from '@/services/i18n/i18n.hooks';
import { Price } from '@/components/Price';

export const ValuesChartTooltip: FC<{ cardValue: IFrontDriverCardValue }> = ({
  cardValue
}) => {
  const t = useTranslation();

  const { record, value, valueTrend } = cardValue;
  const { race, result, championship } = record;
  const { countryCode, round, key } = race;

  const formattedResult =
    typeof result === 'number'
      ? `P${result}`
      : `${t(`races.results.${result}`)} (${result})`;

  return (
    <div className="flex flex-col gap-1">
      <Price value={value} percentage={valueTrend} colorAnimation />

      <p className="font-medium">Round {round}</p>
      <div className="flex items-center gap-2">
        <p className="text-muted-foreground">{race.name}</p>
        <Flag className="w-5 h-3 rounded-[2px]" countryCode={countryCode} />
      </div>

      {championship !== 'f1' && (
        <p className="text-muted-foreground">{t(`races.types.${key}`)}</p>
      )}

      <p className="text-muted-foreground">{formattedResult}</p>
    </div>
  );
};
