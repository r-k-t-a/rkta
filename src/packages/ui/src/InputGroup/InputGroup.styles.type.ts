import { SerializedStyles } from '@emotion/core';
import { CssRkta } from '../Provider/theme/types';

export interface InputGroupStyles {
  initialStyle: SerializedStyles;
  [key: string]: CssRkta;
}
