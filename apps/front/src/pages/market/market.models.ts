export const MARKET_DRIVERS_TAB = 'drivers';
export const MARKET_CHASSIS_TAB = 'chassis';

export const MARKET_TABS = [MARKET_DRIVERS_TAB, MARKET_CHASSIS_TAB] as const;

export type MarketTab = (typeof MARKET_TABS)[number];
