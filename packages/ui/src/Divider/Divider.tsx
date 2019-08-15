import React, { ReactElement, SFC } from 'react';

import Atom from '../Atom';
import { DividerProps } from './Divider.defs';
import useStyles from '../util/useStyles';

const Divider: SFC<DividerProps> = (props: DividerProps): ReactElement => {
  const nextProps = useStyles(props, 'Divider');
  return <Atom element="hr" {...nextProps} />;
};

export default Divider;
