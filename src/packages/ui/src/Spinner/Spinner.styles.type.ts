import { SerializedStyles } from '@emotion/core';
import { RktaTheme } from '../Provider/theme';
import { CssRkta } from '../Provider/theme/types';
import { Props } from './Spinner.type';

export type SpinnerStyles = {
  initialStyle: SerializedStyles;
  borderWidth: (theme: RktaTheme, props: Props) => SerializedStyles;
  color: (theme: RktaTheme, props: Props) => SerializedStyles;
  size: (theme: RktaTheme, props: Props) => SerializedStyles;
  [key: string]: CssRkta;
};
