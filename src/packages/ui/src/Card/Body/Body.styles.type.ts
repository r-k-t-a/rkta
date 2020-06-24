import { SerializedStyles } from '@emotion/core';
import { CssRkta } from '../../Provider/theme/types';

export type CardBodyStyles = {
  initialStyle: SerializedStyles;
  [key: string]: CssRkta;
};
