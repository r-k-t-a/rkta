import { breakpoints } from './breakpoints';
import { color } from './color';
import { shadow } from './shadow';
import { createMediaQueries } from './createMediaQueries';

import * as Addon from '../../Addon/Addon.styles';
import * as Backdrop from '../../Backdrop/Backdrop.styles';
import * as Bage from '../../Bage/Bage.styles';
import * as Button from '../../Button/Button.styles';
import * as Card from '../../Card/Card.styles';
import * as CardHeader from '../../Card/Header/Header.styles';
import * as CardBody from '../../Card/Body/Body.styles';
import * as CardFooter from '../../Card/Footer/Footer.styles';
import * as Divider from '../../Divider/Divider.styles';
import * as Fx from '../../Fx/Fx.styles';
import * as Input from '../../Input/Input.styles';
import * as InputBase from '../../InputBase/InputBase.styles';
import * as InputGroup from '../../InputGroup/InputGroup.styles';
import * as List from '../../List/List.styles';
import * as ListItem from '../../List/ListItem/ListItem.styles';
import * as ListText from '../../List/ListText/ListText.styles';
import * as Modal from '../../Modal/Modal.styles';
import * as Select from '../../Select/Select.styles';
import * as Paper from '../../Paper/Paper.styles';
import * as ScrollBox from '../../ScrollBox/ScrollBox.styles';
import * as Spinner from '../../Spinner/Spinner.styles';
import * as Svg from '../../Svg/Svg.styles';
import * as Text from '../../Text/Text.styles';

import { RktaTheme } from './theme.type';

export const defaultTheme: RktaTheme = {
  color,
  media: createMediaQueries(breakpoints),
  shadow,
  Addon,
  Backdrop,
  Bage,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Fx,
  Input,
  InputBase,
  InputGroup,
  List,
  ListItem,
  ListText,
  Modal,
  Select,
  ScrollBox,
  Spinner,
  Svg,
  Paper,
  Text,
};
