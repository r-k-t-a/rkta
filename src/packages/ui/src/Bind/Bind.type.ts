import { ReactNode } from 'react';
import { RktaElement } from '../Provider';

export type Align =
  | 'top'
  | 'top-left'
  | 'top-right'
  | 'right'
  | 'bottom'
  | 'bottom-right'
  | 'bottom-left'
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
