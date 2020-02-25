import { ReactElement, ReactNode } from 'react';

export type Align =
  | 'top'
  | 'topLeft'
  | 'topRight'
  | 'right'
  | 'bottom'
  | 'bottomRight'
  | 'bottomLeft'
  | 'left';

export interface Props {
  align?: Align;
  children: [ReactElement, ReactNode];
  offset?: number;
}
