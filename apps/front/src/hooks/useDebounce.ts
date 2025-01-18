import { useCallback } from 'react';
import debounce from 'lodash.debounce';

export const useDebounce = <T extends (...args: any[]) => any>(
  cb: T,
  delay: number
) => useCallback(debounce(cb, delay), []);
