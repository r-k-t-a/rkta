import { SerializedStyles } from '@emotion/core';
import { RktaTheme } from '../Provider/theme';
import { CssRkta } from '../Provider/theme/types';
import { Props } from './Placeholder.type';

export interface PlaceholderStyles {
  initialStyle: SerializedStyles;
  width: (theme: RktaTheme, props: Props) => SerializedStyles;
  [key: string]: CssRkta;
}
