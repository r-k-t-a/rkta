import { SerializedStyles } from '@emotion/core';
import { RktaTheme } from '../Provider/theme';
import { CssRkta } from '../Provider/theme/types';
import { Props } from './Button.type';

export type ButtonStyles = {
  initialStyle: SerializedStyles;
  blockLevel: SerializedStyles;
  busy: (theme: RktaTheme, props: { color: string }) => SerializedStyles;
  color: (theme: RktaTheme, props: { color: string }) => SerializedStyles;
  round: (theme: RktaTheme, props: Props) => SerializedStyles;
  size: (theme: RktaTheme, props: Props) => SerializedStyles;
  [key: string]: CssRkta;
};
