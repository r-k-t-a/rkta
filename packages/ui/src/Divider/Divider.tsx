import React, { ReactElement, SFC } from 'react';

import Atom from '../Atom';
import { DividerProps } from './Divider.defs';
import useStyles from '../util/useStyles';

const Divider: SFC<DividerProps> = ({ children, ...rest }: DividerProps): ReactElement => {
  const nextProps = useStyles(rest, 'Divider');
  return (
    <Atom element="hr" {...nextProps}>
      {children}
    </Atom>
  );
};

export default Divider;
