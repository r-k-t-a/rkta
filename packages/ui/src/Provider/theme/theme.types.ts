import { InterpolationWithTheme, CSSObject } from '@emotion/core';

type initialStyleFunction = (
  theme: ThemeInterface,
  props: ThemedComponentInterface,
) => CssChunkType;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type CssType = InterpolationWithTheme<any>;
export type CssChunkType = CssType | CSSObject | initialStyleFunction;

export interface ThemedComponentInterface {
  css: CssChunkType;
  color?: string;
  [key: string]: CssChunkType;
}

export interface StylesInterface {
  initialStyle?: CssChunkType;
  [key: string]: CssChunkType;
}

export interface ThemeInterface {
  color: {
    [key: string]: string;
  };
  [key: string]: StylesInterface;
}
