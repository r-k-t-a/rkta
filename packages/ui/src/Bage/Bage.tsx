import React, { ReactElement, SFC } from 'react';

import Atom from '../Atom';
import useStyles from '../util/useStyles';
import { BageProps } from './Bage.defs';

const Bage: SFC<BageProps> = ({ children, ...rest }: BageProps): ReactElement => {
  const nextProps = useStyles(
    { rounded: true, overline: true, nowrap: true, ...rest },
    'Bage',
    'Paper',
    'Text',
  );
  return <Atom {...nextProps}>{children}</Atom>;
};

export default Bage;
