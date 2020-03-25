import { ReactNode } from 'react';
import { Color } from '../Provider/theme';

export interface Props {
  index: number;
  children: ReactNode;
  color?: Color;
  indicatorSize?: number | string;
  overline?: boolean;
  vertical?: boolean;
}
