import { Color, RktaElement } from '../Provider/theme';

export interface Props extends Omit<RktaElement, 'size'> {
  borderWidth?: number | string;
  color?: Color;
  size?: number | string;
}
