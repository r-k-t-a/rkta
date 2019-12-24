import { MediaTuple } from '../Provider/theme/theme.type';

export function stringifyMediaTuple([min, max]: MediaTuple): string {
  let query = 'all';
  if (min > 0) query = `${query} and (min-width: ${min}px)`;
  if (max !== Infinity) query = `${query} and (max-width: ${max}px)`;
  return query;
}
