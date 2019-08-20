import { RktaElement } from '../Provider/theme/theme.defs';

export interface SvgProps extends RktaElement {
  block?: boolean;
  /** One of theme colors or CSS Value: Color. */
  color?: string;
  size?: number;
  /** Always svg. */
  element?: never;
}
