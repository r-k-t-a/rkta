import { RktaElement } from '../Provider/theme';
import { Props as Paper } from '../Paper/Paper.type';

export interface Props extends Paper, RktaElement {
  animateHeight?: boolean;
  height?: number | string;
  /** Hide scrollbars */
  hideScrollbars?: boolean;
  /** Enable scroll snapping */
  snap?: boolean;
  /** Horizontal scroll mode */
  x?: boolean;
  /** Vertical scroll mode */
  y?: boolean;
  /** Show animated content or no */
  visible?: boolean;
}
