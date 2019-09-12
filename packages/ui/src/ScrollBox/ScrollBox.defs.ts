import { RktaElement } from '../Provider/theme/theme.defs';
import { PaperProps } from '../Paper/Paper.defs';

export interface ScrollBoxProps extends PaperProps, RktaElement {
  /** Hide scrollbars */
  hideScrollbars?: boolean;
  /** Enable scroll snapping */
  snap?: boolean;
  /** Horizontal scroll mode */
  x?: boolean;
  /** Vertical scroll mode */
  y?: boolean;
}
