import { SerializedStyles } from '@emotion/core';
import { CssRkta } from '../Provider/theme/types';

export interface ListStyles {
  initialStyle: SerializedStyles;
  fitAll: SerializedStyles;
  fitBottom: SerializedStyles;
  fitTop: SerializedStyles;
  [key: string]: CssRkta;
}
