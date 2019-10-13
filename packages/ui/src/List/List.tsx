/** @jsx jsx */
import { SFC, ReactElement } from 'react';
import { jsx } from '@emotion/core';

import { Props } from './List.type';
import { useProviderContext } from '../Provider';

// eslint-disable-next-line react/prop-types
export const List: SFC<Props> = ({ children, ...rest }): ReactElement => {
  const { applyStyles } = useProviderContext();
  const [nextProps, Element] = applyStyles(rest, 'List', 'Paper', 'Text');
  return <Element {...nextProps}>{children}</Element>;
};

export default List;
