import { RktaElement } from '../Provider/theme';

export type Props = RktaElement & {
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
  /** Set divider horizontal margins */
  horizontalSpace?: number | string;
  /** Set divider vertical margins */
  verticalSpace?: number | string;
};
