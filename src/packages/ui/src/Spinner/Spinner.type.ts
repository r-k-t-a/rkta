import { Color, RktaElement } from '../Provider/theme';

export type SpinnerProps = Omit<RktaElement, 'size'> & {
  borderWidth?: number | string;
  color?: Color;
  size?: number | string;
};
