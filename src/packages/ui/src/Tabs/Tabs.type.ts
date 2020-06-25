import { ReactNode } from 'react';
import { Color } from '../Provider/theme';
import { PaperProps } from '../Paper/Paper.type';

export type TabsProps = Omit<PaperProps, 'size'> & {
  index: number;
  children: ReactNode;
  color?: Color;
  indicatorSize?: number | string;
  overline?: boolean;
  vertical?: boolean;
};
