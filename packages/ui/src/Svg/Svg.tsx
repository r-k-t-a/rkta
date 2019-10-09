/** @jsx jsx */
import { ReactElement, SFC } from 'react';
import { jsx } from '@emotion/core';

import useProviderContext from '../Provider/useProviderContext';
import Props from './Svg.d';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Svg: SFC<Props> = ({ children, ...rest }: Props): ReactElement => {
  const { applyStyles } = useProviderContext();
  const [nextProps, Element] = applyStyles({ element: 'svg', ...rest }, 'Svg');
  return <Element {...nextProps}>{children}</Element>;
};

export default Svg;
