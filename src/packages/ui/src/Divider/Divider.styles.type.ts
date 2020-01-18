import { SerializedStyles } from '@emotion/core';
import { RktaTheme } from '../Provider/theme';
import { CssRkta } from '../Provider/theme/types';
import { Props } from './Divider.type';

export interface DividerStyles {
  initialStyle: (theme: RktaTheme) => SerializedStyles;
  dotted: SerializedStyles;
  fitAll: SerializedStyles;
  fitBottom: SerializedStyles;
  fitTop: SerializedStyles;
  inset: SerializedStyles;
  invisible: SerializedStyles;
  horizontalSpace: (theme: RktaTheme, props: Props) => SerializedStyles;
  verticalSpace: (theme: RktaTheme, props: Props) => SerializedStyles;
  [key: string]: CssRkta;
}
