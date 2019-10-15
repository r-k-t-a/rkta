/** @jsx jsx */
import { ReactElement, SFC } from 'react';
import { jsx } from '@emotion/core';

import { Props } from './ScrollBox.type';
import { useProviderContext } from '../Provider';

// eslint-disable-next-line react/prop-types
export const ScrollBox: SFC<Props> = ({ children, ...rest }): ReactElement => {
  const { applyStyles } = useProviderContext();
  const [nextProps, Element] = applyStyles(rest, 'ScrollBox', 'Paper', 'Text');
  return <Element {...nextProps}>{children}</Element>;
};
