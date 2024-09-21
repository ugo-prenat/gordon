export const CHAMPIONSHIPS = ['f1', 'f2', 'f3'] as const;
export type Championship = (typeof CHAMPIONSHIPS)[number];

type ChampionshipConf = Record<
  Championship,
  { wikiName: string; championship: Championship }
>;

export const CHAMPIONSHIPS_CONF: ChampionshipConf = {
  f1: { wikiName: 'Formula One', championship: 'f1' },
  f2: { wikiName: 'FIA Formula 2', championship: 'f2' },
  f3: { wikiName: 'FIA Formula 3', championship: 'f3' }
};

export const CHAMPIONSHIPS_TOTAL_DRIVERS: Record<Championship, number> = {
  f1: 20,
  f2: 22,
  f3: 30
};

export const CHAMPIONSHIPS_MULTIPLIERS: Record<Championship, number> = {
  f1: 1.5,
  f2: 1,
  f3: 0.8
};
