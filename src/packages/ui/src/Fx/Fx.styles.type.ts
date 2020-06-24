import { SerializedStyles } from '@emotion/core';
import { CssRkta } from '../Provider/theme/types';

export type FxStyles = {
  initialStyle: SerializedStyles;
  fadeDown: SerializedStyles;
  popUp: SerializedStyles;
  [key: string]: CssRkta;
};
