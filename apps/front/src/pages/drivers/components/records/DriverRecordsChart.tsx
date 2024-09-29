import { FC, PropsWithChildren, useEffect, useRef } from 'react';
import { useDriverRecords } from '../../drivers.api';
import { IRecord } from '@gordon/models';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { cn } from '@/utils/tailwind.utils';

const RecordsChart: FC<{ records: IRecord[] }> = ({ records }) => {
  return (
    <ScrollableContainer>
      {records
        .slice()
        .reverse()
        .map((record) => (
          <RecordBar key={record.id} record={record} />
        ))}
    </ScrollableContainer>
  );
};

const RecordBar: FC<{ record: IRecord }> = ({ record }) => {
  const { score, race, year } = record;
  const { round } = race;
  const heightPercentage = Math.min(score, 100);

  return (
    <div className="h-full flex flex-col min-w-7 max-w-7">
      <div className="flex-grow flex flex-col-reverse">
        <div
          id="bar"
          style={{ height: `${heightPercentage}%` }}
          className={cn('min-h-7 rounded-sm flex items-start justify-center', {
            'bg-red-400': score < 30,
            'bg-orange-400': score >= 30 && score < 60,
            'bg-yellow-400': score >= 60 && score < 80,
            'bg-green-400': score >= 80
          })}
        >
          <p className="font-bold pt-1 text-xs dark:text-background">
            {Math.round(score)}
          </p>
        </div>
      </div>

      <div id="label" className="mt-2 text-center">
        <p className="text-xs font-semibold text-muted-foreground">{year}</p>
        <p className="text-sm font-semibold text-muted-foreground">RD</p>
        <p className="text-sm font-semibold text-muted-foreground">{round}</p>
      </div>
    </div>
  );
};

const ScrollableContainer: FC<PropsWithChildren> = ({ children }) => {
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollableElement = scrollAreaRef.current.querySelector(
        '[data-radix-scroll-area-viewport]'
      );
      if (scrollableElement instanceof HTMLElement)
        scrollableElement.scrollLeft = scrollableElement.scrollWidth;
    }
  }, []);

  return (
    <ScrollArea ref={scrollAreaRef} className="relative h-[300px] pb-3">
      <div className="absolute left-0 top-0 bottom-0 w-24 h-full bg-gradient-to-r from-background via-background/70 to-transparent pointer-events-none z-10"></div>
      <div className="flex gap-5 h-full ml-10">{children}</div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export const DriverRecordsChart: FC<{ driverId: string }> = ({ driverId }) => {
  const {
    data: records,
    isPending,
    isError,
    error
  } = useDriverRecords(driverId);

  if (isPending) return <div>Loading records...</div>;

  if (isError)
    return (
      <div>
        Error: {error.message} code: {error.code}
      </div>
    );

  return (
    <div className="p-6">
      <RecordsChart records={records} />
    </div>
  );
};
