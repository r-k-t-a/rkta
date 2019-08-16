import React, { ReactElement, SFC } from 'react';

import Atom from '../Atom';
import useStyles from '../util/useStyles';
import { BageProps } from './Bage.defs';

const Bage: SFC<BageProps> = ({ children, ...rest }: BageProps): ReactElement => {
  const nextProps = useStyles(rest, 'Bage', 'Paper', 'Text');
  return (
    <Atom rounded overline nowrap {...nextProps}>
      {children}
    </Atom>
  );
};

export default Bage;
