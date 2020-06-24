import { SerializedStyles } from '@emotion/core';
import { RktaTheme } from '../Provider/theme';
import { CssRkta } from '../Provider/theme/types';
import { Props } from './Svg.type';

export type SvgStyles = {
  initialStyle: SerializedStyles;
  block: SerializedStyles;
  color: (theme: RktaTheme, props: Props) => SerializedStyles;
  size: (theme: RktaTheme, props: Props) => SerializedStyles;
  [key: string]: CssRkta;
};
