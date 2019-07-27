import React from 'react';
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

export interface RktaComponentStyles {
  initialStyle?: CssRkta;
  [key: string]: CssRkta;
}

export interface ThemeInterface {
  color: {
    [key: string]: string;
  };
  [key: string]: RktaComponentStyles;
}
