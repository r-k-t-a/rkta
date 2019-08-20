/** @jsx jsx */
import { SFC, ReactElement } from 'react';
import { jsx } from '@emotion/core';

import useProviderContext from '../Provider/useProviderContext';
import { TextProps } from './Text.defs';

const Text: SFC<TextProps> = ({ children, element, ...rest }: TextProps): ReactElement => {
  const { useStyles } = useProviderContext();
  const [nextProps, Element] = useStyles({ element, ...rest }, 'Text');
  return <Element {...nextProps}>{children}</Element>;
};

Text.defaultProps = {
  element: 'span',
};

export default Text;
