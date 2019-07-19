import React, { ReactElement, SFC } from 'react';

import Atom from '../Atom';
import { Props as AtomProps } from '../Atom/Atom';
import useStyles from '../util/useStyles';

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

const Divider: SFC<Props> = (props: Props): ReactElement => {
  const nextProps = useStyles('Divider', props);
  return <Atom element="hr" {...nextProps} />;
};

export default Divider;
