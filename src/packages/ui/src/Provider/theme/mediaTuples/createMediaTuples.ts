import entries from 'lodash/entries';
import upperFirst from 'lodash/upperFirst';
import { MediaTuples, MediaTuple } from './mediaTuples.type';
import { RktaTheme } from '../mountTheme';

type Breakpoints = RktaTheme['breakpoint'];
type Breakpoint = [string, number];

function getTuple([, min]: Breakpoint, nextBreakPoint: Breakpoint): MediaTuple {
  const max = nextBreakPoint ? nextBreakPoint[1] - 1 : Infinity;
  const tuple = [min, max];
  return tuple;
}

export const createMediaTuples = (breakpoints: Breakpoints): MediaTuples => {
  const breakpointEntries = entries(breakpoints);
  return breakpointEntries.reduce((acc, breakpoint, index) => {
    const [key] = breakpoint;
    const [min, max] = getTuple(breakpoint, breakpointEntries[index + 1]);
    const upperKey = upperFirst(key);
    return {
      ...acc,
      [key]: [min, max],
      [`atMost${upperKey}`]: [0, max],
      [`atLeast${upperKey}`]: [min, Infinity],
    };
  }, {} as MediaTuples);
};
