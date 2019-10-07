/** @jsx jsx */
import { SFC, ReactElement } from 'react';
import { jsx } from '@emotion/core';

import useProviderContext from '../Provider/useProviderContext';
import Spinner from './Spinner.d';

const Spinner: SFC<Spinner> = (props: Spinner): ReactElement => {
  const { applyStyles } = useProviderContext();
  const [nextProps, Element] = applyStyles(props, 'Spinner');
  return <Element {...nextProps} />;
};

Spinner.defaultProps = {
  borderWidth: '2.4px',
  color: 'inherit',
  size: '24px',
};

export default Spinner;
