import React, { ReactElement, SFC } from 'react';

import Atom from '../Atom';
import { DividerProps } from './Divider.defs';
import useProviderContext from '../Provider/useProviderContext';

const Divider: SFC<DividerProps> = ({ children, ...rest }: DividerProps): ReactElement => {
  const { useStyles } = useProviderContext();
  const nextProps = useStyles(rest, 'Divider');
  return (
    <Atom element="hr" {...nextProps}>
      {children}
    </Atom>
  );
};

export default Divider;
