/** @jsx jsx */
import { SFC, ReactElement } from 'react';
import { jsx } from '@emotion/core';

import { useProviderContext } from '../Provider';
import { Props } from './Text.type';

const Text: SFC<Props> = ({ children, element, ...rest }: Props): ReactElement => {
  const { applyStyles } = useProviderContext();
  const [nextProps, Element] = applyStyles({ element, ...rest }, 'Text');
  return <Element {...nextProps}>{children}</Element>;
};

Text.defaultProps = {
  element: 'span',
};

export default Text;
