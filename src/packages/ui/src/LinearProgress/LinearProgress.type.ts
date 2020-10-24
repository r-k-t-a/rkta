import { Color, RktaElement } from '../Provider/theme';

export type LinearProgressProps = Omit<RktaElement, 'size'> & {
  color?: Color;
  size?: number | string;
};
