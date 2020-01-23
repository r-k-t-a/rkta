import { SerializedStyles } from '@emotion/core';
import { CssRkta } from '../../Provider/theme/types';

export interface ListItemStyles {
  initialStyle: SerializedStyles;
  [key: string]: CssRkta;
}
