/** @jsx jsx */
import { ReactElement, SFC } from 'react';
import { jsx } from '@emotion/core';

import Divider from './Divider.d';
import useProviderContext from '../Provider/useProviderContext';

const Divider: SFC<Divider> = ({ children, ...rest }: Divider): ReactElement => {
  const { applyStyles } = useProviderContext();
  const [nextProps, Element] = applyStyles({ element: 'hr', ...rest }, 'Divider');
  return <Element {...nextProps}>{children}</Element>;
};

export default Divider;
