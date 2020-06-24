import { SerializedStyles } from '@emotion/core';
import { RktaTheme } from '../Provider/theme';
import { CssRkta } from '../Provider/theme/types';
import { Props } from './Bind.type';

export type Bounds = Props & {
  bounds: DOMRect;
};

export type BindStyles = {
  initialStyle: SerializedStyles;
  blockLevel: (theme: RktaTheme, props: Bounds) => SerializedStyles;
  bounds: (theme: RktaTheme, props: Bounds) => SerializedStyles;
  fx: (theme: RktaTheme, props: Props) => SerializedStyles;
  [key: string]: CssRkta;
};
