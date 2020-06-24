import { SerializedStyles } from '@emotion/core';
import { RktaTheme, CssRkta } from '../../Provider/theme';

export type ListItemStyles = {
  initialStyle: SerializedStyles;
  overline: (theme: RktaTheme) => SerializedStyles;
  underline: (theme: RktaTheme) => SerializedStyles;
  [key: string]: CssRkta;
};
