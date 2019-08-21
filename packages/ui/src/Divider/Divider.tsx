/** @jsx jsx */
import { ReactElement, SFC } from 'react';
import { jsx } from '@emotion/core';

import { DividerProps } from './Divider.defs';
import useProviderContext from '../Provider/useProviderContext';

const Divider: SFC<DividerProps> = ({ children, ...rest }: DividerProps): ReactElement => {
  const { applyStyles } = useProviderContext();
  const [nextProps, Element] = applyStyles({ element: 'hr', ...rest }, 'Divider');
  return <Element {...nextProps}>{children}</Element>;
};

export default Divider;
