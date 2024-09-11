export const CHAMPIONSHIPS = ['f1', 'f2', 'f3'] as const;

export const CHAMPIONSHIPS_CONF: {
  [key in Championship]: { wikiName: string };
} = {
  f1: { wikiName: 'Formula One' },
  f2: { wikiName: 'FIA Formula 2' },
  f3: { wikiName: 'FIA Formula 3' }
};

export type Championship = (typeof CHAMPIONSHIPS)[number];
