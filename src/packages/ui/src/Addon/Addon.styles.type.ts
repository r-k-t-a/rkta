import { SerializedStyles } from '@emotion/core';
import { RktaTheme } from '../Provider/theme';
import { CssRkta } from '../Provider/theme/types/CssRkta.type';

export interface AddonStyles {
  initialStyle: SerializedStyles;
  big: SerializedStyles;
  fitAll: SerializedStyles;
  fitLeft: SerializedStyles;
  fitRight: SerializedStyles;
  huge: SerializedStyles;
  inset: SerializedStyles;
  main: SerializedStyles;
  normal: SerializedStyles;
  paddingX: (theme: RktaTheme, props: { paddingX: number }) => SerializedStyles;
  paddingY: (theme: RktaTheme, props: { paddingY: number }) => SerializedStyles;
  small: SerializedStyles;
  tiny: SerializedStyles;
  [key: string]: CssRkta;
}
