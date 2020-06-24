import { SerializedStyles } from '@emotion/core';
import { CssRkta } from '../Provider/theme/types';

export type BageStyles = {
  initialStyle: SerializedStyles;
  fitAll: SerializedStyles;
  fitLeft: SerializedStyles;
  fitRight: SerializedStyles;
  [key: string]: CssRkta;
};
