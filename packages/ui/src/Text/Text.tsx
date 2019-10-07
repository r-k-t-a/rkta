/** @jsx jsx */
import { SFC, ReactElement } from 'react';
import { jsx } from '@emotion/core';

import useProviderContext from '../Provider/useProviderContext';
import Text from './Text.d';

const Text: SFC<Text> = ({ children, element, ...rest }: Text): ReactElement => {
  const { applyStyles } = useProviderContext();
  const [nextProps, Element] = applyStyles({ element, ...rest }, 'Text');
  return <Element {...nextProps}>{children}</Element>;
};

Text.defaultProps = {
  element: 'span',
};

export default Text;
