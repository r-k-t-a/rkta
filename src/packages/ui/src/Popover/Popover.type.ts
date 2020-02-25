import { ReactElement, ReactNode } from 'react';
import { Props as Paper } from '../Paper/Paper.type';

export interface Props extends Paper {
  align?:
    | 'top'
    | 'topLeft'
    | 'topRight'
    | 'right'
    | 'bottom'
    | 'bottomRight'
    | 'bottomLeft'
    | 'left';
  children: [ReactElement, ReactNode];
  offset?: number;
}
