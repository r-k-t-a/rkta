import React, { SFC, ReactElement } from 'react';

import { ListProps } from './List.defs';
import Atom from '../Atom';
import useProviderContext from '../Provider/useProviderContext';

// eslint-disable-next-line react/prop-types
const List: SFC<ListProps> = ({ children, ...rest }): ReactElement => {
  const { useStyles } = useProviderContext();
  const nextProps = useStyles(rest, 'List', 'Paper', 'Text');
  return <Atom {...nextProps}>{children}</Atom>;
};

export default List;
