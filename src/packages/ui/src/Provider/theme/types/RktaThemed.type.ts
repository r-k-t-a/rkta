import { ReactNode } from 'react';
import { CssRkta } from './CssRkta.type';

export interface RktaThemed {
  css?: CssRkta;
  [key: string]: CssRkta | ReactNode;
}
