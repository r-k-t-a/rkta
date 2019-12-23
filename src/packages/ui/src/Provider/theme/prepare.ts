import merge from 'lodash/merge';

import { NotPrepairedTheme, RktaTheme } from './theme.type';
import { defaultTheme } from './defaultTheme';
import { createMediaQueries } from './createMediaQueries';

export const prepareTheme = (theme?: NotPrepairedTheme): RktaTheme => {
  const rawTheme = merge(defaultTheme, theme);
  return merge(rawTheme, {
    media: createMediaQueries(rawTheme.breakpoints),
    ts: Date.now(),
  });
};
