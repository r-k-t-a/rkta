import { SerializedStyles } from '@emotion/core';
import { CssRkta } from '../../Provider/theme/types';

export type CardFooterStyles = {
  initialStyle: SerializedStyles;
  center: SerializedStyles;
  flexEnd: SerializedStyles;
  spaceAround: SerializedStyles;
  spaceBetween: SerializedStyles;
  spaceEvenly: SerializedStyles;
  [key: string]: CssRkta;
};
