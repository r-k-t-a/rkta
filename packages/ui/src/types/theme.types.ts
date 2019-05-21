import { InterpolationWithTheme, CSSObject } from '@emotion/core';

export type CssType = InterpolationWithTheme<ThemeInterface>;

export type CssTypeThunk = CssType | initialStyleFunction;

export type CssThunkResult = initialStyleFunction | CSSObject;

export interface ThemedComponentProps {
  css: CssType;
  color?: string;
  [key: string]: undefined | null | number | string | object | Function | CssType;
}

export type initialStyleFunction = (
  theme: ThemeInterface,
  props: ThemedComponentProps,
) => CssThunkResult;

export interface StylesInterface {
  initialStyle?: initialStyleFunction;
  [key: string]: CssTypeThunk;
}

export interface ThemeInterface {
  color: {
    [key: string]: string;
  };
  [key: string]: StylesInterface;
}
