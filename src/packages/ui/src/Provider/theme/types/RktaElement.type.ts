import { ElementType, HTMLProps } from 'react';
import { CssEmotion } from './CssEmotion.type';
import { RktaThemed } from './RktaThemed.type';

export type RktaElement = RktaThemed &
  HTMLProps<HTMLElement> & {
    css?: CssEmotion;
    // children?: ReactNode;
    /** React element or string. */
    element?: ElementType;
  };
