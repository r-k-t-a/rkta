import { SerializedStyles } from '@emotion/core';
import { CssRkta } from '../Provider/theme/types';

export type InputGroupStyles = {
  initialStyle: SerializedStyles;
  [key: string]: CssRkta;
};
