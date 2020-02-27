import { SerializedStyles } from '@emotion/core';
import { RktaTheme } from '../Provider/theme';
import { CssRkta } from '../Provider/theme/types';
import { Props } from './Bind.type';

export interface Bounds extends Props {
  bounds: DOMRect;
}

export interface BindStyles {
  initialStyle: SerializedStyles;
  blockLevel: (theme: RktaTheme, props: Bounds) => SerializedStyles;
  bounds: (theme: RktaTheme, props: Bounds) => SerializedStyles;
  fx: (theme: RktaTheme, props: Props) => SerializedStyles;
  [key: string]: CssRkta;
}
