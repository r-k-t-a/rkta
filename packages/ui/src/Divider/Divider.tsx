import React from 'react';

import Atom from '../Atom';
import { Props as AtomProps } from '../Atom/Atom';

export interface Props extends AtomProps {
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

const Divider = (props: Props): React.ReactNode => <Atom element="hr" {...props} />;

export default Divider;
