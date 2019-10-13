import { Color, RktaElement } from '../Provider/theme/theme.type';

export interface Props extends RktaElement {
  borderWidth?: number | string;
  color?: Color;
  size?: number | string;
}
