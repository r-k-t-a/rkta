import { RktaElement } from '../Provider/theme/theme.defs';

export interface DividerProps extends RktaElement {
  /** Adds dotted style */
  dotted?: boolean;
  /** Resets margins */
  fitAll?: boolean;
  /** Resets bottom margin */
  fitBottom?: boolean;
  /** Resets top margin */
  fitTop?: boolean;
  /** Shifts to the right */
  inset?: boolean;
  /** Hide and keep the spase */
  invisible?: boolean;
  /** Set divider margins */
  size?: number | string;
}
