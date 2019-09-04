import upperFirst from 'lodash/upperFirst';
import { BreakpointType } from './theme.defs';

function createMediaQuery(min: number | null, max: number | null, key: string): {} | null {
  if ((min === null && max === null) || (min === 0 && max === null)) return null;
  let query = min ? `all and (min-width: ${min}px)` : 'all';
  if (max !== null) query = `${query} and (max-width: ${max}px)`;
  return { [key]: query };
}

export default (breakpoints: BreakpointType[]): {} =>
  breakpoints.reduce((acc, breakpoint, index): {} => {
    const key = Object.keys(breakpoint)[0];
    const nextBreakPoint = breakpoints[index + 1];
    const upperKey = upperFirst(key);
    const min = breakpoint[key];
    const max = nextBreakPoint ? Object.values(nextBreakPoint)[0] - 1 : null;
    return {
      ...acc,
      ...createMediaQuery(min, max, key),
      ...createMediaQuery(null, max, `atLeast${upperKey}`),
      ...createMediaQuery(min, null, `atMost${upperKey}`),
    };
  }, {});
