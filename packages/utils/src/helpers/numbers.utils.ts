export const roundNum = <T extends number | null>(
  num: T,
  precision = 100
): T => {
  if (num === null) return num;
  return (Math.round(num * precision) / precision) as T;
};

export const formatNumber = (num: number) => {
  const formatter = Intl.NumberFormat('en', { notation: 'compact' });
  return formatter.format(num);
};
