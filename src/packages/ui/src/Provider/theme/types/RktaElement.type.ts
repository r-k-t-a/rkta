import { ElementType, ReactNode } from 'react';
import { CssEmotion } from './CssEmotion.type';
import { RktaThemed } from './RktaThemed.type';

export interface RktaElement extends RktaThemed {
  css?: CssEmotion;
  children?: ReactNode;
  /** React element or string. */
  element?: ElementType;
}
