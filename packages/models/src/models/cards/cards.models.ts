export const DRIVER_CARDS_TYPE_ID = 'dcp1';
export const USER_DRIVER_CARDS_TYPE_ID = 'udcp';
export const CHASSIS_CARDS_TYPE_ID = 'ccp1';
export const USER_CHASSIS_CARDS_TYPE_ID = 'uccp';

export const COMMON_CARD_TYPE = 'common';
export const RARE_CARD_TYPE = 'rare';
export const UNIQUE_CARD_TYPE = 'unique';
export const CHAMPION_CARD_TYPE = 'champion';
export const VINTAGE_CARD_TYPE = 'vintage';

export const CARD_TYPES = [
  COMMON_CARD_TYPE,
  RARE_CARD_TYPE,
  UNIQUE_CARD_TYPE,
  CHAMPION_CARD_TYPE,
  VINTAGE_CARD_TYPE
] as const;

export type CardType = (typeof CARD_TYPES)[number];

export const CARD_TYPES_WITH_VALUES = [
  COMMON_CARD_TYPE,
  RARE_CARD_TYPE,
  UNIQUE_CARD_TYPE,
  CHAMPION_CARD_TYPE
] as const;

export type CardTypeWithValues = (typeof CARD_TYPES_WITH_VALUES)[number];

export const CARD_TYPES_MULTIPLIERS: Record<CardTypeWithValues, number> = {
  [COMMON_CARD_TYPE]: 0.7,
  [RARE_CARD_TYPE]: 1,
  [UNIQUE_CARD_TYPE]: 1.5,
  [CHAMPION_CARD_TYPE]: 3
};
