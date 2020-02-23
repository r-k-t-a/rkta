import { SerializedStyles } from '@emotion/core';
import { RktaTheme } from '../Provider/theme';
import { CssRkta } from '../Provider/theme/types';
import { Props } from './Drawer.type';

export interface DrawerStyles {
  align: (theme: RktaTheme, props: Props) => SerializedStyles;
  [key: string]: CssRkta;
}
