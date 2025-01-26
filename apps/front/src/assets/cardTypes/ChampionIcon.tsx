import { FC } from 'react';
import { cn } from '@/utils/tailwind.utils';

export const ChampionIcon: FC<{ className?: string }> = ({ className }) => (
  <div className={cn('w-6 h-6', className)}>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 44 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M43.8262 13.7362C43.8262 13.7577 43.8262 13.7773 43.8125 13.7987L39.3828 34.0859C39.2465 34.8002 38.8652 35.4447 38.3048 35.9081C37.7443 36.3716 37.0398 36.6251 36.3125 36.6249H7.68556C6.95864 36.6246 6.25455 36.3709 5.69451 35.9075C5.13446 35.4441 4.7535 34.7999 4.6172 34.0859L0.187515 13.7987C0.187515 13.7773 0.177749 13.7577 0.173843 13.7362C0.0526073 13.0646 0.154607 12.3717 0.464257 11.7634C0.773908 11.1552 1.27418 10.665 1.88863 10.3679C2.50308 10.0707 3.19792 9.9829 3.86698 10.1178C4.53604 10.2528 5.14253 10.6031 5.59376 11.1151L12.1699 18.203L19.1621 2.5214C19.1624 2.51489 19.1624 2.50837 19.1621 2.50187C19.4122 1.95958 19.8123 1.50028 20.3153 1.17834C20.8182 0.856399 21.4029 0.685303 22 0.685303C22.5972 0.685303 23.1818 0.856399 23.6848 1.17834C24.1877 1.50028 24.5879 1.95958 24.8379 2.50187C24.8376 2.50837 24.8376 2.51489 24.8379 2.5214L31.8301 18.203L38.4063 11.1151C38.8584 10.6069 39.4641 10.26 40.1314 10.1273C40.7986 9.99454 41.4909 10.0832 42.1032 10.3797C42.7155 10.6762 43.2143 11.1645 43.5238 11.7703C43.8334 12.3761 43.9368 13.0663 43.8184 13.7362H43.8262Z"
        fill="white"
        fillOpacity="0.7"
      />
    </svg>
  </div>
);
