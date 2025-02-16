import { FC } from 'react';
import { IFrontDriverCardValue } from '@gordon/models';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { ValuesChartTooltip } from './ValuesChartTooltip';
import { formatNumber } from '@gordon/utils';

export const ValuesChart: FC<{
  records: IFrontDriverCardValue[];
  state?: 'skeleton' | 'error' | 'default';
}> = ({ records, state = 'default' }) => {
  const color = {
    default: 'hsl(var(--chart-default))',
    skeleton: 'hsl(var(--chart-skeleton))',
    error: 'hsl(var(--chart-error))'
  }[state];

  const showTicks = state === 'default';
  const chartConfig = { value: { color } } satisfies ChartConfig;

  const yAxisTickFormatter = (value: number) =>
    showTicks ? formatNumber(value) : '';

  return (
    <ChartContainer config={chartConfig} className="min-h-[150px]">
      <AreaChart data={records} accessibilityLayer>
        {state !== 'error' && <CartesianGrid vertical={false} />}
        <XAxis
          tickMargin={8}
          tickLine={false}
          axisLine={false}
          tick={showTicks}
          dataKey="record.race.round"
          tickFormatter={(value) => `R${value}`}
        />
        <YAxis
          tickMargin={8}
          dataKey="value"
          tickLine={false}
          axisLine={false}
          width={state !== 'error' ? 40 : 0}
          tickFormatter={yAxisTickFormatter}
        />
        <ChartTooltip
          cursor={false}
          active={showTicks}
          content={
            <ChartTooltipContent
              hideLabel
              formatter={(_value, _name, _item, _index, payload) => (
                <ValuesChartTooltip
                  cardValue={payload as unknown as IFrontDriverCardValue}
                />
              )}
            />
          }
        />
        <defs>
          <linearGradient id="fillArea" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopOpacity={0.8}
              stopColor="var(--color-value)"
            />
            <stop
              offset="95%"
              stopOpacity={0.1}
              stopColor="var(--color-value)"
            />
          </linearGradient>
        </defs>
        <Area
          stackId="a"
          type="natural"
          dataKey="value"
          fillOpacity={0.4}
          fill="url(#fillArea)"
          stroke="var(--color-value)"
          isAnimationActive={state === 'default'}
        />
      </AreaChart>
    </ChartContainer>
  );
};
