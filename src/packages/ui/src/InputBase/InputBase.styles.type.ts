import { SerializedStyles } from '@emotion/core';
import { RktaTheme } from '../Provider/theme';
import { CssRkta } from '../Provider/theme/types';
import { Props } from './InputBase.type';

export type InputBaseStyles = {
  initialStyle: SerializedStyles;
  active: SerializedStyles;
  maxRows: (theme: RktaTheme, props: Props) => SerializedStyles;
  multiline: SerializedStyles;
  [key: string]: CssRkta;
};
