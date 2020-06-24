import { SerializedStyles } from '@emotion/core';
import { CssRkta } from '../../Provider/theme/types';

export type CardHeaderStyles = {
  initialStyle: SerializedStyles;
  [key: string]: CssRkta;
};
