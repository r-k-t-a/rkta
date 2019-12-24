import merge from 'lodash/merge';

import { RktaThemeSource, RktaTheme } from './theme.type';
import { defaultTheme } from './defaultTheme';
import { createMediaQueries } from './createMediaQueries';

export const prepareTheme = (theme?: RktaThemeSource): RktaTheme => {
  const rawTheme = merge(defaultTheme, theme);
  return merge(rawTheme, {
    media: createMediaQueries(rawTheme.breakpoints),
    ts: Date.now(),
  });
};
