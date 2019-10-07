import { Color, RktaElement } from '../Provider/theme/theme.d';

export default interface Spinner extends RktaElement {
  borderWidth?: number | string;
  color?: Color;
  size?: number | string;
}
