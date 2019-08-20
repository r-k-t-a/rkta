/** @jsx jsx */
import { SFC, ReactElement } from 'react';
import { jsx } from '@emotion/core';

import useProviderContext from '../Provider/useProviderContext';
import { SpinnerProps } from './Spinner.defs';

const Spinner: SFC<SpinnerProps> = (props: SpinnerProps): ReactElement => {
  const { useStyles } = useProviderContext();
  const [nextProps, Element] = useStyles(props, 'Spinner');
  return <Element {...nextProps} />;
};

Spinner.defaultProps = {
  borderWidth: '2.4px',
  color: 'inherit',
  size: '24px',
};

export default Spinner;
