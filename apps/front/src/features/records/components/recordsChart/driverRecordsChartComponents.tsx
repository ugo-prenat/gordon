import { FC, PropsWithChildren, useEffect, useRef } from 'react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { IRecord } from '@gordon/models';
import { getScoreColor } from '@/pages/drivers/drivers.utils';
import { cn } from '@/utils/tailwind.utils';
import { splitRecords } from '@/features/records/records.utils';
import { Flag } from '@/components/Flag';
import { useCountryName } from '@/services/i18n/i18n.hooks';

export const RecordsChart: FC<{ records: IRecord[] }> = ({ records }) => {
  const splittedRecords = splitRecords(records);

  return (
    <ScrollableContainer>
      {splittedRecords.map(({ records, year, teamIds }, index) => (
        <div
          key={index}
          className="flex flex-col h-full border-l border-muted-foreground/40 ml-3 pl-3"
        >
          <YearSplit year={year} teamIds={teamIds} />
          <RecordsList records={records} />
        </div>
      ))}
    </ScrollableContainer>
  );
};

const RecordsList: FC<{ records: IRecord[] }> = ({ records }) => (
  <div className="flex gap-2 h-full">
    {records
      .slice()
      .reverse()
      .map((record) => (
        <RecordBar key={record.id} record={record} />
      ))}
  </div>
);

const RecordBar: FC<{ record: IRecord }> = ({ record }) => {
  const { score, race } = record;
  const { round, countryCode } = race;
  const heightPercentage = Math.min(score, 100);

  return (
    <div className="h-full flex flex-col min-w-7 max-w-7">
      <div className="flex-grow flex flex-col-reverse">
        <div
          style={{ height: `${heightPercentage}%` }}
          className={cn(
            'min-h-6 rounded-sm flex items-start justify-center',
            getScoreColor(score)
          )}
        >
          <p className="font-bold pt-1 text-xs dark:text-background">
            {Math.round(score)}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 mt-2 text-center">
        <RaceCountryFlag countryCode={countryCode} />
        <p className="text-xs font-bold text-muted-foreground whitespace-pre">
          R{round}
        </p>
      </div>
    </div>
  );
};

const RaceCountryFlag: FC<{ countryCode: string | null }> = ({
  countryCode
}) => {
  const tooltip = useCountryName(countryCode);

  return countryCode ? (
    <Flag countryCode={countryCode} className="w-5 h-3" tooltip={tooltip} />
  ) : null;
};

const YearSplit: FC<{ year: string; teamIds: string[] }> = ({
  year,
  teamIds
}) => (
  <span className="text-sm font-semibold text-muted-foreground/40 whitespace-pre pb-6">
    {year} - {teamIds.join(', ')}
  </span>
);

export const ScrollableContainer: FC<PropsWithChildren> = ({ children }) => {
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollableEl = scrollAreaRef?.current?.querySelector(
      '[data-radix-scroll-area-viewport]'
    );
    if (scrollableEl) scrollableEl.scrollLeft = scrollableEl.scrollWidth;
  }, []);

  return (
    <ScrollArea ref={scrollAreaRef} className="relative h-[300px] pb-3">
      <div className="absolute left-0 top-0 bottom-0 w-24 h-full bg-gradient-to-r from-background via-background/70 to-transparent pointer-events-none z-10"></div>
      <div className="flex h-full ml-10">{children}</div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
