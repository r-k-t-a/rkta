import React, { SFC, ReactElement } from 'react';

import Atom from '../Atom';
import useStyles from '../util/useStyles';
import { SpinnerProps } from './Spinner.d';

const Spinner: SFC<SpinnerProps> = (props: SpinnerProps): ReactElement => {
  const nextProps = useStyles('Spinner', props);
  return <Atom {...nextProps} />;
};

Spinner.defaultProps = {
  borderWidth: '2.4px',
  color: 'inherit',
  size: '24px',
};

export default Spinner;
