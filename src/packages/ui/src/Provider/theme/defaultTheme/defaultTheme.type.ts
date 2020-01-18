import { Breakpoint } from '../breakpoints';
import { Colors } from '../color';
import { MediaQueries } from '../mediaQueries';
import { MediaTuples } from '../mediaTuples';
import { Shadows } from '../shadow';
import { RktaComponentStyles } from '../types';

import { AddonStyles } from '../../../Addon/Addon.styles.type';
import { BackdropStyles } from '../../../Backdrop/Backdrop.styles.type';
import { BageStyles } from '../../../Bage/Bage.styles.type';
import { ButtonStyles } from '../../../Button/Button.styles.type';
import { CardStyles } from '../../../Card/Card.styles.type';
import { CardBodyStyles } from '../../../Card/Body/Body.styles.type';
import { CardFooterStyles } from '../../../Card/Footer/Footer.styles.type';
import { CardHeaderStyles } from '../../../Card/Header/Header.styles.type';

export interface RktaDefaultTheme {
  breakpoints: Breakpoint[];
  color: Colors;
  shadow: Shadows;
  Addon: AddonStyles;
  Backdrop: BackdropStyles;
  Bage: BageStyles;
  Button: ButtonStyles;
  Card: CardStyles;
  CardBody: CardBodyStyles;
  CardFooter: CardFooterStyles;
  CardHeader: CardHeaderStyles;
  [key: string]:
    | AddonStyles
    | BackdropStyles
    | BageStyles
    | ButtonStyles
    | CardStyles
    | CardBodyStyles
    | CardFooterStyles
    | CardHeaderStyles
    | RktaComponentStyles
    | Breakpoint[]
    | MediaQueries
    | MediaTuples;
}
