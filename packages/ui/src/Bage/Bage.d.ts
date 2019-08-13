import { ReactNode } from 'react';
import { PaperProps } from '../Paper/Paper.d';

export interface BageProps extends PaperProps {
  children: ReactNode;
  /** Reset Margins */
  fitAll?: boolean;
  /** Reset Left Margin */
  fitLeft?: boolean;
  /** Reset Right Margin */
  fitRight?: boolean;
}