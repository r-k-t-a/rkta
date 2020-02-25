import { SerializedStyles } from '@emotion/core';
import { RktaTheme } from '../Provider/theme';
import { CssRkta } from '../Provider/theme/types';
import { Props } from './Bind.type';

export interface Bounds extends Props {
  bounds: DOMRect;
}

export interface BindStyles {
  initialStyle: SerializedStyles;
  fx: (theme: RktaTheme, props: Props) => SerializedStyles;
  bounds: (theme: RktaTheme, props: Bounds) => SerializedStyles;
  [key: string]: CssRkta;
}
