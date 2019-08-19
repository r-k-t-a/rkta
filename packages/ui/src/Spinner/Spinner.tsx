import React, { SFC, ReactElement } from 'react';

import Atom from '../Atom';
import useProviderContext from '../Provider/useProviderContext';
import { SpinnerProps } from './Spinner.defs';

const Spinner: SFC<SpinnerProps> = (props: SpinnerProps): ReactElement => {
  const { useStyles } = useProviderContext();
  const nextProps = useStyles(props, 'Spinner');
  return <Atom {...nextProps} />;
};

Spinner.defaultProps = {
  borderWidth: '2.4px',
  color: 'inherit',
  size: '24px',
};

export default Spinner;
