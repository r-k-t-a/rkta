import { SerializedStyles } from '@emotion/core';
import { RktaTheme } from '../Provider/theme';
import { CssRkta } from '../Provider/theme/types';
import { Props } from './Input.type';

export interface InputStyles {
  initialStyle: SerializedStyles;
  fancy: (theme: RktaTheme, props: Props) => SerializedStyles;
  main: SerializedStyles;
  [key: string]: CssRkta;
}
