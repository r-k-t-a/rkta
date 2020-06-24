import { SerializedStyles } from '@emotion/core';
import { CssRkta } from '../Provider/theme/types';

export type CardStyles = {
  initialStyle: SerializedStyles;
  [key: string]: CssRkta;
};
