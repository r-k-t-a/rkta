import { MediaTupleData } from '../Provider/theme/theme.type';

export function createTupleData([min, max]: number[]): MediaTupleData {
  let query = 'all';
  if (min > 0) query = `${query} and (min-width: ${min}px)`;
  if (max !== Infinity) query = `${query} and (max-width: ${max}px)`;

  return {
    tuple: [min, max],
    query,
  };
}
