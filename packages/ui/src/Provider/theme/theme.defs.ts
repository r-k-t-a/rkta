import React, { ElementType, ReactNode } from 'react';
import { InterpolationWithTheme } from '@emotion/core';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type CssGetter = (theme: RktaTheme, props: any) => CssRkta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type CssEmotion = InterpolationWithTheme<any>;
export type CssRkta = CssEmotion | CssGetter;

export interface Colors {
  primary: string;
  primary1: string;
  primary2: string;

  secondary: string;
  secondary1: string;

  text: string;
  divider: string;

  paper: string;
  paper1: string;
  paper2: string;
  paper3: string;

  error: string;
  success: string;
  warning: string;

  color1: string;
  color2: string;
  color3: string;
  color4: string;
  color5: string;
  color6: string;
  color7: string;
  color8: string;
  color9: string;
  color10: string;
  color11: string;
  color12: string;
  color13: string;
  color14: string;
  color15: string;
  color16: string;
  [key: string]: string;
}

export interface MediaQueries {
  phone: string;
  tablet: string;
  laptop: string;
  desktop: string;
  jumbotron: string;
  atLeastPhone: string;
  atLeastTablet: string;
  atLeastLaptop: string;
  atLeastDesktop: string;
  atLeastJumbotron: string;
  atMostPhone: string;
  atMostTablet: string;
  atMostLaptop: string;
  atMostDesktop: string;
  atMostJumbotron: string;
  [key: string]: string;
}

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
  [key: string]: CssRkta;
  [key: number]: string;
}

export interface Breakpoint {
  [key: string]: number;
}

export interface RktaTheme {
  color: Colors;
  media: MediaQueries;
  [key: string]: RktaComponentStyles;
}
