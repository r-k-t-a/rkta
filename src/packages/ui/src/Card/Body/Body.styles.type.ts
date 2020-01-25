import { SerializedStyles } from '@emotion/core';
import { CssRkta } from '../../Provider/theme/types';

export interface CardBodyStyles {
  initialStyle: SerializedStyles;
  [key: string]: CssRkta;
}
