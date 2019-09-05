/** @jsx jsx */
import { ReactElement, SFC } from 'react';
import { jsx } from '@emotion/core';

import { ScrollBoxProps } from './ScrollBox.defs';
import useProviderContext from '../Provider/useProviderContext';

// eslint-disable-next-line react/prop-types
const ScrollBox: SFC<ScrollBoxProps> = ({ children, ...rest }): ReactElement => {
  const { applyStyles } = useProviderContext();
  const [nextProps, Element] = applyStyles(rest, 'ScrollBox');
  return <Element {...nextProps}>{children}</Element>;
};

ScrollBox.defaultProps = {
  x: false,
  y: false,
};

export default ScrollBox;
