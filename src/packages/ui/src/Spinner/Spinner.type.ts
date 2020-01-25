import { Color, RktaElement } from '../Provider/theme';

export interface Props extends RktaElement {
  borderWidth?: number | string;
  color?: Color;
  size?: number | string;
}
