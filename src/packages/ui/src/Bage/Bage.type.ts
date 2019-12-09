import { ReactNode } from 'react';
import { Props as Paper } from '../Paper/Paper.type';

export interface Props extends Paper {
  children: ReactNode;
  /** Reset Margins */
  fitAll?: boolean;
  /** Reset Left Margin */
  fitLeft?: boolean;
  /** Reset Right Margin */
  fitRight?: boolean;
}
