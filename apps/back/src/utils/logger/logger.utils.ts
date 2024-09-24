import { HonoRequest } from 'hono';

export const humanize = (times: string[]) =>
  times.map((v) => v.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + ',')).join('.');

export const getTime = (start: number) => {
  const delta = Date.now() - start;
  const humanized = humanize([
    delta < 1000 ? delta + 'ms' : Math.round(delta / 1000) + 's'
  ]);
  return `\x1b[90m${humanized}\x1b[0m`;
};

export const colorStatus = (status: number) => {
  const out: { [key: string]: string } = {
    7: `\x1b[35m${status}\x1b[0m`,
    5: `\x1b[31m${status}\x1b[0m`,
    4: `\x1b[33m${status}\x1b[0m`,
    3: `\x1b[36m${status}\x1b[0m`,
    2: `\x1b[32m${status}\x1b[0m`,
    1: `\x1b[32m${status}\x1b[0m`,
    0: `\x1b[33m${status}\x1b[0m`
  };
  const calculateStatus = (status / 100) | 0;
  return out[calculateStatus];
};

export const getPath = (req: HonoRequest) => {
  const pathMatch = req.raw.url.match(/^https?:\/\/[^/]+(\/[^?]*)/);
  return pathMatch ? pathMatch[1] : req.path;
};
