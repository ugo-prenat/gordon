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
  skeleton?: boolean;
}> = ({ records, skeleton = false }) => {
  const chartConfig = {
    value: { color: skeleton ? 'hsl(0, 0%, 20%)' : 'hsl(var(--chart-1))' }
  } satisfies ChartConfig;

  const yAxisTickFormatter = (value: number) =>
    skeleton ? '' : formatNumber(value);

  return (
    <ChartContainer config={chartConfig} className="min-h-[150px]">
      <AreaChart data={records} accessibilityLayer>
        <CartesianGrid vertical={false} />
        <XAxis
          tickMargin={8}
          tickLine={false}
          axisLine={false}
          dataKey="record.race.round"
          tick={!skeleton}
          tickFormatter={(value) => `R${value}`}
        />
        <YAxis
          width={40}
          tickMargin={8}
          dataKey="value"
          tickLine={false}
          axisLine={false}
          tickFormatter={yAxisTickFormatter}
        />
        <ChartTooltip
          cursor={false}
          active={!skeleton}
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
        />
      </AreaChart>
    </ChartContainer>
  );
};
