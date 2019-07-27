import React, { ReactElement, SFC } from 'react';

import Paper from '../Paper';
import useStyles from '../util/useStyles';
import { BageProps } from './Bage.d';

const Bage: SFC<BageProps> = (props: BageProps): ReactElement => {
  const nextProps = useStyles('Bage', props);
  return <Paper rounded overline nowrap {...nextProps} />;
};

export default Bage;
