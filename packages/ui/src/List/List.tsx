/** @jsx jsx */
import { SFC, ReactElement } from 'react';
import { jsx } from '@emotion/core';

import List from './List.d';
import useProviderContext from '../Provider/useProviderContext';

// eslint-disable-next-line react/prop-types
const List: SFC<List> = ({ children, ...rest }): ReactElement => {
  const { applyStyles } = useProviderContext();
  const [nextProps, Element] = applyStyles(rest, 'List', 'Paper', 'Text');
  return <Element {...nextProps}>{children}</Element>;
};

export default List;
