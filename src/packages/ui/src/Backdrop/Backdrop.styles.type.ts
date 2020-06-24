import { SerializedStyles } from '@emotion/core';
import { RktaTheme } from '../Provider/theme';
import { CssRkta } from '../Provider/theme/types';
import { Props } from './Backdrop.type';

export type BackdropStyles = {
  initialStyle: (theme: RktaTheme, props: Props) => SerializedStyles;
  align: (theme: RktaTheme, props: Props) => SerializedStyles;
  fadeIn: (theme: RktaTheme, props: Props) => SerializedStyles;
  fadeOut: (theme: RktaTheme, props: Props) => SerializedStyles;
  onClick: SerializedStyles;
  [key: string]: CssRkta;
};
