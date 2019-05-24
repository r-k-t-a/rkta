import React from 'react';

import Atom from '../Atom';
import { Props as AtomProps } from '../Atom/Atom';

export interface Props extends AtomProps {
  /** Resets margins */
  baseline?: boolean;
  /** Adds dotted style */
  dotted?: boolean;
  /** Shifts to the right */
  inset?: boolean;
  /** Hide and keep the spase */
  invisible?: boolean;
}

const Divider = (props: Props): React.ReactNode => <Atom element="hr" {...props} />;

export default Divider;
