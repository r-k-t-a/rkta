import { PaperProps } from '../Paper/Paper.type';

export type ScrollBoxProps = PaperProps & {
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
};
