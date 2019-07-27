import { ReactNode } from 'react';
import { AtomProps } from '../Atom/Atom.d';

export interface AddonProps extends AtomProps {
  children: ReactNode;

  /** Reset Paddings */
  fitAll?: boolean;
  /** Reset Left Padding */
  fitLeft?: boolean;
  /** Reset Right Padding. Composed Atom Props: */
  fitRight?: boolean;
}
