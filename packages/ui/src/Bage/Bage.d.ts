import { ReactNode } from 'react';
import Paper from '../Paper/Paper.d';

export default interface BageProps extends Paper {
  children: ReactNode;
  /** Reset Margins */
  fitAll?: boolean;
  /** Reset Left Margin */
  fitLeft?: boolean;
  /** Reset Right Margin */
  fitRight?: boolean;
}
