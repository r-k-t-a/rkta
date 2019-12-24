/* eslint-disable @typescript-eslint/no-explicit-any */
import { InterpolationWithTheme } from '@emotion/core';
import { ElementType, ReactNode } from 'react';

export type CssEmotion = InterpolationWithTheme<any>;
type CssGetter = (theme: RktaTheme, props: any) => CssRkta;
export type CssRkta = CssEmotion | CssGetter;

export declare type Color =
  | 'color1'
  | 'color2'
  | 'color3'
  | 'color4'
  | 'color5'
  | 'color6'
  | 'color7'
  | 'color8'
  | 'color9'
  | 'color10'
  | 'color11'
  | 'color12'
  | 'color13'
  | 'color14'
  | 'color15'
  | 'color16'
  | string;

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

export type MediaTuple = number[];

export interface MediaTupleData {
  tuple: MediaTuple;
  query: string;
}

export interface MediaQueries {
  phone: MediaTupleData;
  tablet: MediaTupleData;
  laptop: MediaTupleData;
  desktop: MediaTupleData;
  jumbotron: MediaTupleData;
  atLeastPhone: MediaTupleData;
  atLeastTablet: MediaTupleData;
  atLeastLaptop: MediaTupleData;
  atLeastDesktop: MediaTupleData;
  atLeastJumbotron: MediaTupleData;
  atMostPhone: MediaTupleData;
  atMostTablet: MediaTupleData;
  atMostLaptop: MediaTupleData;
  atMostDesktop: MediaTupleData;
  atMostJumbotron: MediaTupleData;
  [key: string]: MediaTupleData;
}

export interface Shadows {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
  11: string;
  12: string;
  13: string;
  14: string;
  15: string;
  16: string;
  17: string;
  18: string;
  19: string;
  20: string;
  21: string;
  22: string;
  23: string;
  24: string;
  [key: string]: string;
}

export interface RktaThemed {
  css?: CssRkta;
  [key: string]: CssRkta | ReactNode;
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

export interface RktaThemeSource {
  breakpoints: Breakpoint[];
  color: Colors;
  shadow: Shadows;
  [key: string]: RktaComponentStyles | Breakpoint[] | MediaQueries;
}

export interface RktaTheme extends RktaThemeSource {
  media: MediaQueries;
}
