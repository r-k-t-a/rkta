import { Breakpoint } from '../breakpoints';
import { Colors } from '../color';
import { MediaQueries } from '../mediaQueries';
import { MediaTuples } from '../mediaTuples';
import { Shadows } from '../shadow';
import { RktaComponentStyles } from '../types';

import { AddonStyles } from '../../../Addon/Addon.styles.type';
import { BackdropStyles } from '../../../Backdrop/Backdrop.styles.type';
import { BageStyles } from '../../../Bage/Bage.styles.type';
import { BindStyles } from '../../../Bind/Bind.styles.type';
import { ButtonStyles } from '../../../Button/Button.styles.type';
import { CardStyles } from '../../../Card/Card.styles.type';
import { CardBodyStyles } from '../../../Card/Body/Body.styles.type';
import { CardFooterStyles } from '../../../Card/Footer/Footer.styles.type';
import { CardHeaderStyles } from '../../../Card/Header/Header.styles.type';
import { DividerStyles } from '../../../Divider/Divider.styles.type';
import { DrawerStyles } from '../../../Drawer/Drawer.styles.type';
import { FxStyles } from '../../../Fx/Fx.styles.type';
import { InputStyles } from '../../../Input/Input.styles.type';
import { InputBaseStyles } from '../../../InputBase/InputBase.styles.type';
import { InputGroupStyles } from '../../../InputGroup/InputGroup.styles.type';
import { ListStyles } from '../../../List/List.styles.type';
import { ListItemStyles } from '../../../List/ListItem/ListItem.styles.type';
import { ListTextStyles } from '../../../List/ListText/ListText.styles.type';
import { PaperStyles } from '../../../Paper/Paper.styles.type';
import { PlaceholderStyles } from '../../../Placeholder/Placeholder.styles.type';
import { ScrollBoxStyles } from '../../../ScrollBox/ScrollBox.styles.type';
import { SelectStyles } from '../../../Select/Select.styles.type';
import { SpinnerStyles } from '../../../Spinner/Spinner.styles.type';
import { SvgStyles } from '../../../Svg/Svg.styles.type';
import { TabsStyles } from '../../../Tabs/Tabs.styles.type';
import { TextStyles } from '../../../Text/Text.styles.type';

export interface RktaDefaultTheme {
  breakpoints: Breakpoint[];
  color: Colors;
  shadow: Shadows;
  Addon: AddonStyles;
  Backdrop: BackdropStyles;
  Bage: BageStyles;
  Bind: BindStyles;
  Button: ButtonStyles;
  Card: CardStyles;
  CardBody: CardBodyStyles;
  CardFooter: CardFooterStyles;
  CardHeader: CardHeaderStyles;
  Divider: DividerStyles;
  Drawer: DrawerStyles;
  Fx: FxStyles;
  Input: InputStyles;
  InputBase: InputBaseStyles;
  InputGroup: InputGroupStyles;
  List: ListStyles;
  ListItem: ListItemStyles;
  ListText: ListTextStyles;
  Paper: PaperStyles;
  Placeholder: PlaceholderStyles;
  ScrollBox: ScrollBoxStyles;
  Select: SelectStyles;
  Spinner: SpinnerStyles;
  Svg: SvgStyles;
  Tabs: TabsStyles;
  Text: TextStyles;
  [key: string]:
    | AddonStyles
    | BackdropStyles
    | BageStyles
    | ButtonStyles
    | CardStyles
    | CardBodyStyles
    | CardFooterStyles
    | CardHeaderStyles
    | DividerStyles
    | DrawerStyles
    | FxStyles
    | InputStyles
    | InputBaseStyles
    | InputGroupStyles
    | PaperStyles
    | PlaceholderStyles
    | ScrollBoxStyles
    | SelectStyles
    | SpinnerStyles
    | SvgStyles
    | TabsStyles
    | TextStyles
    | RktaComponentStyles
    | Breakpoint[]
    | MediaQueries
    | MediaTuples;
}
