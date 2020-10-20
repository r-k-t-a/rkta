import { breakpoint } from '../breakpoint';
import { Colors } from '../color';
import { Shadows } from '../shadow';
import { CssRkta } from '../types/CssRkta.type';

import * as AddonStyles from '../../../Addon/Addon.styles';
import * as BackdropStyles from '../../../Backdrop/Backdrop.styles';
import * as BageStyles from '../../../Bage/Bage.styles';
import * as ButtonStyles from '../../../Button/Button.styles';
import * as CardStyles from '../../../Card/Card.styles';
import * as CardBodyStyles from '../../../Card/Body/Body.styles';
import * as CardFooterStyles from '../../../Card/Footer/Footer.styles';
import * as CardHeaderStyles from '../../../Card/Header/Header.styles';
import * as CheckboxStyles from '../../../Checkbox/Checkbox.styles';
import * as ContainerStyles from '../../../Container/Container.styles';
import * as DividerStyles from '../../../Divider/Divider.styles';
import * as DrawerStyles from '../../../Drawer/Drawer.styles';
import * as FloatingAreaStyles from '../../../FloatingArea/FloatingArea.styles';
import * as InputStyles from '../../../Input/Input.styles';
import * as InputBaseStyles from '../../../InputBase/InputBase.styles';
import * as InputGroupStyles from '../../../InputGroup/InputGroup.styles';
import * as ListStyles from '../../../List/List.styles';
import * as ListItemStyles from '../../../List/ListItem/ListItem.styles';
import * as ListTextStyles from '../../../List/ListText/ListText.styles';
import * as NativeSelectStyles from '../../../NativeSelect/NativeSelect.styles';
import * as PaperStyles from '../../../Paper/Paper.styles';
import * as PlaceholderStyles from '../../../Placeholder/Placeholder.styles';
import * as RadioStyles from '../../../Radio/Radio.styles';
import * as ScrollBoxStyles from '../../../ScrollBox/ScrollBox.styles';
import * as SelectStyles from '../../../Select/Select.styles';
import * as SpinnerStyles from '../../../Spinner/Spinner.styles';
import * as SvgStyles from '../../../Svg/Svg.styles';
import * as SwitchStyles from '../../../Switch/Switch.styles';
import * as TabsStyles from '../../../Tabs/Tabs.styles';
import * as TextStyles from '../../../Text/Text.styles';
import * as TooltipStyles from '../../../Tooltip/Tooltip.styles';

type StylesOverload = {
  [key: string]: CssRkta;
};

export type RktaDefaultTheme = {
  breakpoint: typeof breakpoint & {
    [key: string]: number;
  };
  color: Colors;
  shadow: Shadows;
  ts: number;
  Addon: typeof AddonStyles & StylesOverload;
  Backdrop: typeof BackdropStyles & StylesOverload;
  Bage: typeof BageStyles & StylesOverload;
  Button: typeof ButtonStyles & StylesOverload;
  Card: typeof CardStyles & StylesOverload;
  CardBody: typeof CardBodyStyles & StylesOverload;
  CardFooter: typeof CardFooterStyles & StylesOverload;
  CardHeader: typeof CardHeaderStyles & StylesOverload;
  Checkbox: typeof CheckboxStyles & StylesOverload;
  Container: typeof ContainerStyles & StylesOverload;
  Divider: typeof DividerStyles & StylesOverload;
  Drawer: typeof DrawerStyles & StylesOverload;
  FloatingArea: typeof FloatingAreaStyles & StylesOverload;
  Input: typeof InputStyles & StylesOverload;
  InputBase: typeof InputBaseStyles & StylesOverload;
  InputGroup: typeof InputGroupStyles & StylesOverload;
  List: typeof ListStyles & StylesOverload;
  ListItem: typeof ListItemStyles & StylesOverload;
  ListText: typeof ListTextStyles & StylesOverload;
  NativeSelect: typeof NativeSelectStyles & StylesOverload;
  Paper: typeof PaperStyles & StylesOverload;
  Placeholder: typeof PlaceholderStyles & StylesOverload;
  Radio: typeof RadioStyles & StylesOverload;
  Select: typeof SelectStyles & StylesOverload;
  ScrollBox: typeof ScrollBoxStyles & StylesOverload;
  Spinner: typeof SpinnerStyles & StylesOverload;
  Svg: typeof SvgStyles & StylesOverload;
  Switch: typeof SwitchStyles & StylesOverload;
  Tabs: typeof TabsStyles & StylesOverload;
  Text: typeof TextStyles & StylesOverload;
  Tooltip: typeof TooltipStyles & StylesOverload;
};
