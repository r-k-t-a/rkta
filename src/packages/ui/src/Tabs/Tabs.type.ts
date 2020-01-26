import { ReactNode } from 'react';
import { Color } from '../Provider/theme';

export interface Props {
  index: number;
  children: ReactNode;
  color?: Color;
  overline?: boolean;
  vertical?: boolean;
}
