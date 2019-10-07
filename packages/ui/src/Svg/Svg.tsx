/** @jsx jsx */
import { ReactElement, SFC } from 'react';
import { jsx } from '@emotion/core';

import useProviderContext from '../Provider/useProviderContext';
import Svg from './Svg.d';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Svg: SFC<Svg> = ({ children, ...rest }: Svg): ReactElement => {
  const { applyStyles } = useProviderContext();
  const [nextProps, Element] = applyStyles({ element: 'svg', ...rest }, 'Svg');
  return <Element {...nextProps}>{children}</Element>;
};

export default Svg;
