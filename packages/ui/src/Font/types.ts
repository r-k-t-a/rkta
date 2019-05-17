import React from 'react';
import { CssType } from '../util/themedTypes';

export interface FontProps {
  children: React.ReactNode;
  color?: string | number;
  css?: CssType;
  getColor: Function;
}

export interface FontStyleInterface {
  initialStyles: Function;
  [key: string]: object;
}
