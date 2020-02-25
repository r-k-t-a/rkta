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
  handleAnimationEnd: Function;
  fx?: 'in' | 'out';
  offset?: number;
  to: Element;
  // triggerBounds: DOMRect;
}
