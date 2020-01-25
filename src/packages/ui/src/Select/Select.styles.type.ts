import { SerializedStyles } from '@emotion/core';
import { RktaTheme } from '../Provider/theme';
import { CssRkta } from '../Provider/theme/types';
import { Props } from './Select.type';

export interface SelectStyles {
  initialStyle: SerializedStyles;
  active: (theme: RktaTheme, props: Props) => SerializedStyles;
  main: SerializedStyles;
  [key: string]: CssRkta;
}
