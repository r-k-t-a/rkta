import merge from 'lodash/merge';
import mapValues from 'lodash/mapValues';

import { RktaTheme } from './mountTheme.type';
import { defaultTheme, RktaDefaultTheme } from '../defaultTheme';
import { createMediaTuples } from '../mediaTuples';
import { stringifyMediaTuple } from '../../../util/stringifyMediaTuple';

export const mountTheme = (theme?: RktaDefaultTheme): RktaTheme => {
  const rawTheme = merge(defaultTheme, theme);
  const mediaTuples = createMediaTuples(rawTheme.breakpoints);
  const media = mapValues(mediaTuples, stringifyMediaTuple);
  return merge(rawTheme, {
    mediaTuples,
    media,
    ts: Date.now(),
  });
};
