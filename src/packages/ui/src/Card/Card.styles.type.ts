import { SerializedStyles } from '@emotion/core';
import { CssRkta } from '../Provider/theme/types';

export interface CardStyles {
  initialStyle: SerializedStyles;
  [key: string]: CssRkta;
}
