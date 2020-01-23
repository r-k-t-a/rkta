import { SerializedStyles } from '@emotion/core';
import { RktaTheme } from '../Provider/theme';
import { CssRkta } from '../Provider/theme/types';
import { Props } from './Text.type';

export interface TextStyles {
  color: (theme: RktaTheme, props: Props) => SerializedStyles;
  sans: SerializedStyles;
  serif: SerializedStyles;
  monospace: SerializedStyles;
  uppercase: SerializedStyles;
  baseline: SerializedStyles;
  muted: SerializedStyles;
  center: SerializedStyles;
  etched: SerializedStyles;
  readOnly: SerializedStyles;
  nowrap: SerializedStyles;
  wrapLongLines: SerializedStyles;
  hyphens: SerializedStyles;
  h1: SerializedStyles;
  h2: SerializedStyles;
  h3: SerializedStyles;
  h4: SerializedStyles;
  h5: SerializedStyles;
  h6: SerializedStyles;
  subtitle1: SerializedStyles;
  subtitle2: SerializedStyles;
  body: SerializedStyles;
  body2: SerializedStyles;
  button: SerializedStyles;
  caption: SerializedStyles;
  overline: SerializedStyles;
  [key: string]: CssRkta;
}
