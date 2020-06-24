import { SerializedStyles } from '@emotion/core';
import { RktaTheme } from '../Provider/theme';
import { CssRkta } from '../Provider/theme/types';
import { Props } from './ScrollBox.type';

export type ScrollBoxStyles = {
  initialStyle: SerializedStyles;
  animateHeight: SerializedStyles;
  height: (theme: RktaTheme, props: Props) => SerializedStyles;
  hideScrollbars: SerializedStyles;
  snap: SerializedStyles;
  x: SerializedStyles;
  y: SerializedStyles;
  [key: string]: CssRkta;
};
