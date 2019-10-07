import { RktaElement } from '../Provider/theme/theme.d';
import Paper from '../Paper/Paper.d';

export default interface ScrollBox extends Paper, RktaElement {
  /** Hide scrollbars */
  hideScrollbars?: boolean;
  /** Enable scroll snapping */
  snap?: boolean;
  /** Horizontal scroll mode */
  x?: boolean;
  /** Vertical scroll mode */
  y?: boolean;
}
