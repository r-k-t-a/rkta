import { ReactNode } from 'react';
import { Color } from '../Provider/theme';
import { Props as Paper } from '../Paper/Paper.type';

export type Props = Omit<Paper, 'size'> & {
  index: number;
  children: ReactNode;
  color?: Color;
  indicatorSize?: number | string;
  overline?: boolean;
  vertical?: boolean;
};
