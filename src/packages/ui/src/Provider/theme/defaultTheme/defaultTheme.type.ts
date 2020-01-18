import { Breakpoint } from '../breakpoints';
import { Colors } from '../color';
import { MediaQueries } from '../mediaQueries';
import { MediaTuples } from '../mediaTuples';
import { Shadows } from '../shadow';
import { RktaComponentStyles } from '../types';

import { AddonStyles } from '../../../Addon/Addon.styles.type';

export interface RktaDefaultTheme {
  breakpoints: Breakpoint[];
  color: Colors;
  shadow: Shadows;
  Addon: AddonStyles;
  [key: string]: AddonStyles | RktaComponentStyles | Breakpoint[] | MediaQueries | MediaTuples;
}
