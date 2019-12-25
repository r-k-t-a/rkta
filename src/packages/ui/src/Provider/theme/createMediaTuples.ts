import upperFirst from 'lodash/upperFirst';
import { Breakpoint, MediaTuples, MediaTuple } from './theme.type';

function getTuple(key: string, breakpoint: Breakpoint, nextBreakPoint: Breakpoint): MediaTuple {
  const min = breakpoint[key];
  const max = nextBreakPoint ? Object.values(nextBreakPoint)[0] - 1 : Infinity;
  const tuple = [min, max];
  return tuple;
}

export const createMediaTuples = (breakpoints: Breakpoint[]): MediaTuples =>
  breakpoints.reduce((acc, breakpoint, index) => {
    const key = Object.keys(breakpoint)[0];
    const [min, max] = getTuple(key, breakpoint, breakpoints[index + 1]);
    const upperKey = upperFirst(key);
    return {
      ...acc,
      [key]: [min, max],
      [`atLeast${upperKey}`]: [0, max],
      [`atMost${upperKey}`]: [min, Infinity],
    };
  }, {} as MediaTuples);
