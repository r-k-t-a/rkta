import { SerializedStyles } from '@emotion/core';
import { CssRkta } from '../Provider/theme/types';

export type ListStyles = {
  initialStyle: SerializedStyles;
  fitAll: SerializedStyles;
  fitBottom: SerializedStyles;
  fitTop: SerializedStyles;
  [key: string]: CssRkta;
};
