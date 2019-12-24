import upperFirst from 'lodash/upperFirst';
import { Breakpoint, MediaQueries, MediaQueryItem, MediaTuple } from './theme.type';

export function stringifyTuple([min, max]: number[]): MediaQueryItem {
  let query = 'all';
  if (min > 0) query = `${query} and (min-width: ${min}px)`;
  if (max !== Infinity) query = `${query} and (max-width: ${max}px)`;

  return {
    tuple: [min, max],
    query,
  };
}

function getTuple(key: string, breakpoint: Breakpoint, nextBreakPoint: Breakpoint): MediaTuple {
  const min = breakpoint[key];
  const max = nextBreakPoint ? Object.values(nextBreakPoint)[0] - 1 : Infinity;
  const tuple = [min, max];
  return tuple;
}

export const createMediaQueries = (breakpoints: Breakpoint[]): MediaQueries =>
  breakpoints.reduce((acc, breakpoint, index) => {
    const key = Object.keys(breakpoint)[0];
    const [min, max] = getTuple(key, breakpoint, breakpoints[index + 1]);
    const upperKey = upperFirst(key);
    return {
      ...acc,
      [key]: stringifyTuple([min, max]),
      [`atLeast${upperKey}`]: stringifyTuple([0, max]),
      [`atMost${upperKey}`]: stringifyTuple([min, Infinity]),
    };
  }, {} as MediaQueries);
