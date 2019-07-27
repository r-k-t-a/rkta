import { AtomProps } from '../Atom/Atom.d';

export interface DividerProps extends AtomProps {
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
}
