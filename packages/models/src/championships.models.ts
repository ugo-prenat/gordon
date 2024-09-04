export const CHAMPIONSHIPS = [
  'Formula One',
  'FIA Formula 2',
  'FIA Formula 3'
] as const;

export type Championship = (typeof CHAMPIONSHIPS)[number];
