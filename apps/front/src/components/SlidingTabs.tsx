import { useRef, useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { cn } from '@/utils/tailwind.utils';

interface ILineProps {
  width: number;
  left: number;
  isAnimate: boolean;
}

export interface ITab<T extends string> {
  value: T;
  label: string;
  content: JSX.Element;
}

interface ISlidingTabsProps<T extends string> {
  tabs: ITab<T>[];
  defaultTab: T;
  onClick: (tab: T) => void;
  className?: string;
}

export const SlidingTabs = <T extends string>({
  tabs,
  defaultTab,
  className,
  onClick
}: ISlidingTabsProps<T>) => {
  const tabsRef = useRef<(HTMLElement | null)[]>([]);

  const [{ width, left, isAnimate }, setLineProps] = useState<ILineProps>({
    width: 0,
    left: 0,
    isAnimate: false
  });

  const handleClick = (index: number, value: T) => () => {
    const tab = tabsRef.current[index];
    if (tab) {
      onClick(value);
      setLineProps({
        width: tab.offsetWidth,
        left: tab.offsetLeft,
        isAnimate: true
      });
    }
  };

  useEffect(() => {
    const tabIndex = tabs.findIndex((tab) => tab.value === defaultTab);
    const tab = tabsRef.current[tabIndex];

    if (tab)
      setLineProps({
        width: tab.offsetWidth,
        left: tab.offsetLeft,
        isAnimate: false
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Tabs defaultValue={defaultTab} className="h-full flex flex-col">
      <TabsList
        className={cn(
          'relative border-b w-full justify-start bg-background',
          className
        )}
      >
        {tabs.map(({ value, label }, index) => (
          <TabsTrigger
            key={value}
            value={value}
            onClick={handleClick(index, value)}
            className={cn({ 'ml-3': index === 0 })}
            ref={(el) => (tabsRef.current[index] = el)}
          >
            {label}
          </TabsTrigger>
        ))}
        <span
          style={{ width, left }}
          className={cn(
            { 'transition-all duration-300': isAnimate },
            'absolute bottom-[-1px] bg-primary h-[2px] w-10 rounded-sm'
          )}
        />
      </TabsList>

      <div className="flex-1 overflow-auto">
        {tabs.map(({ value, content }) => (
          <TabsContent
            key={value}
            value={value}
            className="h-full overflow-auto"
          >
            {content}
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
};
