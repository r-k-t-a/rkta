import { Color, RktaElement } from '../Provider/theme/theme.defs';

export interface SpinnerProps extends RktaElement {
  borderWidth?: number | string;
  color?: Color;
  size?: number | string;
}
