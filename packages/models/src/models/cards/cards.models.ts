export const DRIVER_CARDS_TYPE_ID = 'drca';
export const USER_DRIVER_CARDS_TYPE_ID = 'udca';
export const CHASSIS_CARDS_TYPE_ID = 'chca';
export const USER_CHASSIS_CARDS_TYPE_ID = 'uchc';

export const CARDS_ID_TYPES = [
  DRIVER_CARDS_TYPE_ID,
  USER_DRIVER_CARDS_TYPE_ID,
  CHASSIS_CARDS_TYPE_ID,
  USER_CHASSIS_CARDS_TYPE_ID
] as const;

export type CardIdType = (typeof CARDS_ID_TYPES)[number];

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

export const DEFAULT_CARD_TYPE: CardTypeWithValues = COMMON_CARD_TYPE;
