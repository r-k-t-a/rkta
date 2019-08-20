/** @jsx jsx */
import { ReactElement, SFC } from 'react';
import { jsx } from '@emotion/core';

import useProviderContext from '../Provider/useProviderContext';
import { SvgProps } from './Svg.defs';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Svg: SFC<SvgProps> = ({ children, ...rest }: SvgProps): ReactElement => {
  const { useStyles } = useProviderContext();
  const [nextProps, Element] = useStyles({ element: 'svg', ...rest }, 'Svg');
  return <Element {...nextProps}>{children}</Element>;
};

export default Svg;
