import { InterpolationWithTheme } from '@emotion/core';

export type CssType = InterpolationWithTheme<Function | object | string>;

export interface ThemedComponentProps {
  css: CssType | CssType[];
  [key: string]: CssType | object | boolean;
}
