import { SerializedStyles } from '@emotion/core';
import { CssRkta } from '../../Provider/theme/types';

export interface CardFooterStyles {
  initialStyle: SerializedStyles;
  right: SerializedStyles;
  [key: string]: CssRkta;
}
