import { ReactNode } from 'react';
import { CssRkta } from './CssRkta.type';

export type RktaThemed = {
  css?: CssRkta;
  [key: string]: CssRkta | ReactNode;
};
