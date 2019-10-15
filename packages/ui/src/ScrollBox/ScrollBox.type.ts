import { RktaElement } from '../Provider/theme/theme.type';
import { Props as Paper } from '../Paper/Paper.type';

export interface Props extends Paper, RktaElement {
  /** Hide scrollbars */
  hideScrollbars?: boolean;
  /** Enable scroll snapping */
  snap?: boolean;
  /** Horizontal scroll mode */
  x?: boolean;
  /** Vertical scroll mode */
  y?: boolean;
}
