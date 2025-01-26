import { FC } from 'react';
import { cn } from '@/utils/tailwind.utils';

export const VintageIcon: FC<{ className?: string }> = ({ className }) => (
  <div className={cn('w-6 h-6', className)}>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 46 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M41.75 7C37.5833 7 35.5 0.75 29.25 0.75C23 0.75 23 4.91667 23 4.91667C23 4.91667 23 0.75 16.75 0.75C10.5 0.75 8.41665 7 4.24998 7C2.16665 7 0.083313 4.91667 0.083313 4.91667C0.083313 4.91667 2.16665 15.3333 10.5 15.3333C20.9166 15.3333 23 9.08333 23 9.08333C23 9.08333 25.0833 15.3333 35.5 15.3333C43.8333 15.3333 45.9166 4.91667 45.9166 4.91667C45.9166 4.91667 43.8333 7 41.75 7Z"
        fill="#FFFDFD"
        fillOpacity="0.7"
      />
    </svg>
  </div>
);
