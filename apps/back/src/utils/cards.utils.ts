export const buildCardId = (prefix: string) =>
  `${prefix}-${crypto.randomUUID()}`;
// `${prefix}-${Math.random().toString(16).slice(2)}`;
