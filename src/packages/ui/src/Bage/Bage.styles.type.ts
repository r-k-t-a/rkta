import { SerializedStyles } from '@emotion/core';
import { CssRkta } from '../Provider/theme/types';

export interface BageStyles {
  initialStyle: SerializedStyles;
  fitAll: SerializedStyles;
  fitLeft: SerializedStyles;
  fitRight: SerializedStyles;
  [key: string]: CssRkta;
}
