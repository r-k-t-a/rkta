import { ReactNode } from 'react';
import { Paper } from '../Paper/Paper.defs';

export interface BageProps extends Paper {
  children: ReactNode;
  /** Reset Margins */
  fitAll?: boolean;
  /** Reset Left Margin */
  fitLeft?: boolean;
  /** Reset Right Margin */
  fitRight?: boolean;
}
