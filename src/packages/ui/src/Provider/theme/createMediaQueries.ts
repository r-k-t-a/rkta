import upperFirst from 'lodash/upperFirst';
import { Breakpoint, MediaQueries, MediaTuple } from './theme.type';
import { createTupleData } from '../../util/createTupleData';

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
      [key]: createTupleData([min, max]),
      [`atLeast${upperKey}`]: createTupleData([0, max]),
      [`atMost${upperKey}`]: createTupleData([min, Infinity]),
    };
  }, {} as MediaQueries);
