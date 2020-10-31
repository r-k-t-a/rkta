import toString from 'lodash/toString';
import { Value } from '../InputBase';

export function hasVisibleValue(...values: Value[]): boolean {
  const result = values.findIndex((value) => toString(value).length > 0);
  return result !== -1;
}
