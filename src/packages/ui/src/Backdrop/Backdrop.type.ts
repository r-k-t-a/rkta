import { ReactNode } from 'react';
import { RktaElement } from '../Provider/theme/theme.type';

export interface Align {
  align?:
    | 'center'
    | 'top'
    | 'topLeft'
    | 'topRight'
    | 'right'
    | 'bottom'
    | 'bottomRight'
    | 'bottomLeft'
    | 'left';
}

export interface Props extends Align, RktaElement {
  children: ReactNode;
  onClick?(): void;
  opacity?: number;
  onFadeOut?(): void;
  visible?: boolean;
}
