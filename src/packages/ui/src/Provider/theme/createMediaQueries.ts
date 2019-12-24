import upperFirst from 'lodash/upperFirst';
import { Breakpoint, MediaQueries, MediaTuple, MediaTupleData } from './theme.type';
import { stringifyMediaTuple } from '../../util/stringifyMediaTuple';

function getTuple(key: string, breakpoint: Breakpoint, nextBreakPoint: Breakpoint): MediaTuple {
  const min = breakpoint[key];
  const max = nextBreakPoint ? Object.values(nextBreakPoint)[0] - 1 : Infinity;
  const tuple = [min, max];
  return tuple;
}

function getMediObject(tuple: MediaTuple): MediaTupleData {
  return {
    tuple,
    query: stringifyMediaTuple(tuple),
  };
}

export const createMediaQueries = (breakpoints: Breakpoint[]): MediaQueries =>
  breakpoints.reduce((acc, breakpoint, index) => {
    const key = Object.keys(breakpoint)[0];
    const [min, max] = getTuple(key, breakpoint, breakpoints[index + 1]);
    const upperKey = upperFirst(key);
    return {
      ...acc,
      [key]: getMediObject([min, max]),
      [`atLeast${upperKey}`]: getMediObject([0, max]),
      [`atMost${upperKey}`]: getMediObject([min, Infinity]),
    };
  }, {} as MediaQueries);
