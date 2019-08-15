import React, { ReactElement, SFC } from 'react';

import Atom from '../Atom';
import useStyles from '../util/useStyles';
import { BageProps } from './Bage.defs';

const Bage: SFC<BageProps> = (props: BageProps): ReactElement => {
  const nextProps = useStyles(props, 'Text', 'Paper', 'Bage');
  return <Atom rounded overline nowrap {...nextProps} />;
};

export default Bage;
