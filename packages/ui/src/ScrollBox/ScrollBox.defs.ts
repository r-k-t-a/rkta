import { RktaElement } from '../Provider/theme/theme.defs';

export interface ScrollBoxProps extends RktaElement {
  /** Adds horizontal scroll */
  x?: boolean;
  /** Adds vertical scroll */
  y?: boolean;
}
