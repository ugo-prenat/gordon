export const CHAMPIONSHIPS = ['f1', 'f2', 'f3'] as const;
export type Championship = (typeof CHAMPIONSHIPS)[number];

export const CHAMPIONSHIPS_CONF: ChampionshipConf = {
  f1: { wikiName: 'Formula One', championship: 'f1' },
  f2: { wikiName: 'FIA Formula 2', championship: 'f2' },
  f3: { wikiName: 'FIA Formula 3', championship: 'f3' }
};
type ChampionshipConf = {
  [key in Championship]: { wikiName: string; championship: Championship };
};
