import { SerializedStyles } from '@emotion/core';
import { Color, RktaTheme } from '../Provider/theme';
import { CssRkta } from '../Provider/theme/types/CssRkta.type';
import { Indicator } from './useIndicator';

export type IndicatorProps = {
  indicator: Indicator;
  overline?: boolean;
  vertical?: boolean;
};

export type TabsStyles = {
  initialStyle: SerializedStyles;
  color: (
    theme: RktaTheme,
    props: {
      color: Color;
    },
  ) => SerializedStyles;
  indicator: (theme: RktaTheme, props: IndicatorProps) => SerializedStyles[];
  [key: string]: CssRkta;
};
