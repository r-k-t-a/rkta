/** @jsx jsx */
import { ReactElement, SFC } from 'react';
import { jsx } from '@emotion/core';

import { DividerProps } from './Divider.defs';
import useProviderContext from '../Provider/useProviderContext';

const Divider: SFC<DividerProps> = ({ children, ...rest }: DividerProps): ReactElement => {
  const { useStyles } = useProviderContext();
  const [nextProps, Element] = useStyles({ element: 'hr', ...rest }, 'Divider');
  return <Element {...nextProps}>{children}</Element>;
};

export default Divider;
