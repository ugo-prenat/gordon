export const DRIVER_OVERVIEW_TAB = 'overview';
export const DRIVER_RECORDS_TAB = 'records';
export const DRIVER_CARDS_TAB = 'cards';

export const DRIVER_PAGE_TABS = [
  DRIVER_OVERVIEW_TAB,
  DRIVER_RECORDS_TAB,
  DRIVER_CARDS_TAB
] as const;

export type DriverPageTab = (typeof DRIVER_PAGE_TABS)[number];
