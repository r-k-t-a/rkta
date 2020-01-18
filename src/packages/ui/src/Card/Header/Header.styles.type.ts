import { SerializedStyles } from '@emotion/core';
import { CssRkta } from '../../Provider/theme/types';

export interface CardHeaderStyles {
  initialStyle: SerializedStyles;
  [key: string]: CssRkta;
}
