import { Breakpoint } from '../breakpoints';
import { Colors } from '../color';
import { Shadows } from '../shadow';
import { CssRkta } from '../types/CssRkta.type';

import { AddonStyles } from '../../../Addon/Addon.styles.type';
import { BackdropStyles } from '../../../Backdrop/Backdrop.styles.type';
import { BageStyles } from '../../../Bage/Bage.styles.type';
import { BindStyles } from '../../../Bind/Bind.styles.type';
import { ButtonStyles } from '../../../Button/Button.styles.type';
import { CardStyles } from '../../../Card/Card.styles.type';
import { CardBodyStyles } from '../../../Card/Body/Body.styles.type';
import { CardFooterStyles } from '../../../Card/Footer/Footer.styles.type';
import { CardHeaderStyles } from '../../../Card/Header/Header.styles.type';
import * as CheckboxStyles from '../../../Checkbox/Checkbox.styles';
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
import * as RadioStyles from '../../../Radio/Radio.styles';
import { ScrollBoxStyles } from '../../../ScrollBox/ScrollBox.styles.type';
import { SelectStyles } from '../../../Select/Select.styles.type';
import { SpinnerStyles } from '../../../Spinner/Spinner.styles.type';
import { SvgStyles } from '../../../Svg/Svg.styles.type';
import { TabsStyles } from '../../../Tabs/Tabs.styles.type';
import { TextStyles } from '../../../Text/Text.styles.type';

type ExtendComponentStyles = {
  [key: string]: CssRkta;
};

export interface RktaDefaultTheme {
  breakpoints: Breakpoint[];
  color: Colors;
  shadow: Shadows;
  ts: number;
  Addon: AddonStyles;
  Backdrop: BackdropStyles;
  Bage: BageStyles;
  Bind: BindStyles;
  Button: ButtonStyles;
  Card: CardStyles;
  CardBody: CardBodyStyles;
  CardFooter: CardFooterStyles;
  CardHeader: CardHeaderStyles;
  Checkbox: typeof CheckboxStyles & ExtendComponentStyles;
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
  Radio: typeof RadioStyles & ExtendComponentStyles;
  ScrollBox: ScrollBoxStyles;
  Select: SelectStyles;
  Spinner: SpinnerStyles;
  Svg: SvgStyles;
  Tabs: TabsStyles;
  Text: TextStyles;
}
