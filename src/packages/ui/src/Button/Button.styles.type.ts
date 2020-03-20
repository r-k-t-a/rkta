import { SerializedStyles } from '@emotion/core';
import { RktaTheme } from '../Provider/theme';
import { CssRkta } from '../Provider/theme/types';
import { Props } from './Button.type';

export interface ButtonStyles {
  initialStyle: SerializedStyles;
  blockLevel: SerializedStyles;
  busy: SerializedStyles;
  color: (theme: RktaTheme, props: { color: string }) => SerializedStyles;
  round: (theme: RktaTheme, props: Props) => SerializedStyles;
  size: (theme: RktaTheme, props: Props) => SerializedStyles;
  spinnerCss: SerializedStyles;
  [key: string]: CssRkta;
}
