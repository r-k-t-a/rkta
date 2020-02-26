import { ReactNode } from 'react';
import { RktaElement } from '../Provider';

export type Align =
  | 'top'
  | 'topLeft'
  | 'topRight'
  | 'right'
  | 'bottom'
  | 'bottomRight'
  | 'bottomLeft'
  | 'left';

export interface Props extends RktaElement {
  align?: Align;
  children: ReactNode;
  offset?: number;
  onHide: () => void;
  to: Element;
  visible: boolean;
}
