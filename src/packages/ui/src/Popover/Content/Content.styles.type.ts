import { SerializedStyles } from '@emotion/core';
import { RktaTheme } from '../../Provider/theme';
import { CssRkta } from '../../Provider/theme/types';
import { Props } from './Content.type';

export interface PopoverStyles {
  initialStyle: SerializedStyles;
  fxState: (theme: RktaTheme, props: Props) => SerializedStyles;
  triggerBounds: (theme: RktaTheme, props: Props) => SerializedStyles;
  [key: string]: CssRkta;
}
