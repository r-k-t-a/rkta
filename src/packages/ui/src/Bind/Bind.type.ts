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

export type BindProps = RktaElement & {
  align?: Align;
  blockLevel?: boolean;
  children: ReactNode;
  offset?: number;
  onHide: () => void;
  to: Element;
  visible: boolean;
};
