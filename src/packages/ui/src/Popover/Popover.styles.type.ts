import { SerializedStyles } from '@emotion/core';
import { RktaTheme } from '../Provider/theme';
import { CssRkta } from '../Provider/theme/types';
import { Props } from './Popover.type';

export interface PopoverStyles {
  initialStyle: SerializedStyles;
  align: (theme: RktaTheme, props: Props) => SerializedStyles;
  [key: string]: CssRkta;
}
