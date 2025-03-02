export const isEmpty = (value: unknown): boolean =>
  value === undefined ||
  value === null ||
  (typeof value === 'string' && value.trim().length === 0) ||
  (Array.isArray(value) && value.length === 0) ||
  (typeof value === 'object' && Object.keys(value).length === 0);

export const isNotEmpty = (value: unknown): boolean => !isEmpty(value);

export const isNull = (value: unknown): boolean => value === null;

export const isNotNull = (value: unknown): boolean => !isNull(value);

export const uniq = <T>(array: T[]): T[] => [...new Set(array)];

export const uniqBy = <T>(arr: T[], key: keyof T): T[] =>
  Object.values(
    arr.reduce((map, item) => ({ ...map, [`${item[key]}`]: item }), {})
  );

export const isFirst = <T>(array: T[], index: number): boolean => index === 0;

export const isLast = <T>(array: T[], index: number): boolean =>
  index === array.length - 1;
