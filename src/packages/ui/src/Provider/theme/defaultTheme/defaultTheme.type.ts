import { Breakpoint } from '../breakpoints';
import { Colors } from '../color';
import { MediaQueries } from '../mediaQueries';
import { MediaTuples } from '../mediaTuples';
import { Shadows } from '../shadow';
import { RktaComponentStyles } from '../types';

import { AddonStyles } from '../../../Addon/Addon.styles.type';
import { BackdropStyles } from '../../../Backdrop/Backdrop.styles.type';
import { BageStyles } from '../../../Bage/Bage.styles.type';

export interface RktaDefaultTheme {
  breakpoints: Breakpoint[];
  color: Colors;
  shadow: Shadows;
  Addon: AddonStyles;
  Backdrop: BackdropStyles;
  Bage: BageStyles;
  [key: string]:
    | AddonStyles
    | BackdropStyles
    | BageStyles
    | RktaComponentStyles
    | Breakpoint[]
    | MediaQueries
    | MediaTuples;
}
