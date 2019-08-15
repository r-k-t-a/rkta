import React, { SFC, ReactElement } from 'react';

import { ListProps } from './List.defs';
import Atom from '../Atom';
import useStyles from '../util/useStyles';

const List: SFC<ListProps> = (props): ReactElement => {
  const nextProps = useStyles(props, 'Text', 'Paper', 'List');
  return <Atom {...nextProps} />;
};

export default List;
