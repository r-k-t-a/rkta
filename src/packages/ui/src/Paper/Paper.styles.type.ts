import { SerializedStyles } from '@emotion/core';
import { RktaTheme } from '../Provider/theme';
import { CssRkta } from '../Provider/theme/types';
import { Props } from './Paper.type';

export type PaperStyles = {
  initialStyle: (theme: RktaTheme) => SerializedStyles;
  bgColor: (theme: RktaTheme, props: Props) => SerializedStyles;
  clip: SerializedStyles;
  disabled: SerializedStyles;
  hard: SerializedStyles;
  hardBottom: SerializedStyles;
  hardLeft: SerializedStyles;
  hardTop: SerializedStyles;
  hardRight: SerializedStyles;
  outline: (theme: RktaTheme, props: Props) => SerializedStyles;
  outlineColor: (theme: RktaTheme, props: Props) => SerializedStyles;
  readOnly: SerializedStyles;
  relative: SerializedStyles;
  rize: (theme: RktaTheme, props: Props) => SerializedStyles;
  round: SerializedStyles;
  rounded: SerializedStyles;
  size: (theme: RktaTheme, props: Props) => SerializedStyles;
  transparent: SerializedStyles;
  [key: string]: CssRkta;
};
