import merge from 'lodash/merge';
import mapValues from 'lodash/mapValues';

import { RktaThemeSource, RktaTheme } from './theme.type';
import { defaultTheme } from './defaultTheme';
import { createMediaTuples } from './createMediaTuples';
import { stringifyMediaTuple } from '../../util/stringifyMediaTuple';

export const prepareTheme = (theme?: RktaThemeSource): RktaTheme => {
  const rawTheme = merge(defaultTheme, theme);
  const mediaTuples = createMediaTuples(rawTheme.breakpoints);
  const media = mapValues(mediaTuples, stringifyMediaTuple);
  return merge(rawTheme, {
    mediaTuples,
    media,
    ts: Date.now(),
  });
};
