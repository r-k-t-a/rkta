import { Color, RktaElement } from '../Provider/theme';

export type Props = Omit<RktaElement, 'size'> & {
  borderWidth?: number | string;
  color?: Color;
  size?: number | string;
};
