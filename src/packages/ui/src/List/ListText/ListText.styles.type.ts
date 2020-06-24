import { SerializedStyles } from '@emotion/core';
import { CssRkta } from '../../Provider/theme/types';

export type ListTextStyles = {
  initialStyle: SerializedStyles;
  reverse: SerializedStyles;
  [key: string]: CssRkta;
};
