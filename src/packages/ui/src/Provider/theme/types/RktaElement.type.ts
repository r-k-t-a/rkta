import { ElementType, HTMLProps } from 'react';
import { CssEmotion } from './CssEmotion.type';
import { RktaThemed } from './RktaThemed.type';

export interface RktaElement extends RktaThemed, HTMLProps<HTMLElement> {
  css?: CssEmotion;
  // children?: ReactNode;
  /** React element or string. */
  element?: ElementType;
}
