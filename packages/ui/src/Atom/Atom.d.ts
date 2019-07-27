import { ElementType, RefObject, ReactNode } from 'react';
import { CssEmotion, RktaThemed } from '../Provider/theme/theme.d';

export interface AtomProps extends RktaThemed {
  /** React ref object. */
  atomRef?: RefObject<AtomProps>;
  /** Css string, Css object, array or function. */
  css?: CssEmotion;
  children?: ReactNode;
  /** React element or string. */
  element?: ElementType;
}
