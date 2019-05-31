import React from 'react';

import Atom from '../Atom';
import { Props as AtomProps } from '../Atom/Atom';

export interface Props extends AtomProps {
  children: React.ReactNode;

  /** Reset Paddings */
  fitAll?: boolean;
  /** Reset Left Padding */
  fitLeft?: boolean;
  /** Reset Right Padding. Composed Atom Props: */
  fitRight?: boolean;
}

const Addon = ({ children, ...rest }: Props): React.ReactNode => (
  <Atom element="span" {...rest}>
    {children}
  </Atom>
);

export default Addon;
