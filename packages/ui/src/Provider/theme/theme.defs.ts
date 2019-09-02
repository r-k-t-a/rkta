import React, { ElementType, ReactNode } from 'react';
import { InterpolationWithTheme } from '@emotion/core';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type initialStyleFunction = (theme: ThemeInterface, props: any) => CssRkta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type CssEmotion = InterpolationWithTheme<any>;
export type CssRkta = CssEmotion | initialStyleFunction;

export interface RktaThemed {
  css?: CssRkta;
  [key: string]: CssRkta | React.ReactNode;
}
export interface RktaElement extends RktaThemed {
  css?: CssEmotion;
  children?: ReactNode;
  /** React element or string. */
  element?: ElementType;
}

export interface RktaComponentStyles {
  initialStyle?: CssRkta;
  [key: string]: CssRkta;
  [key: number]: string;
}

export interface BreakpointType {
  [key: string]: number;
}

export interface ThemeInterface {
  color: {
    [key: string]: string;
  };
  [key: string]: RktaComponentStyles;
}
