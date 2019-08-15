import React, { SFC, ReactElement } from 'react';

import { ListProps } from './List.defs';
import Paper from '../Paper';
import useStyles from '../util/useStyles';

const List: SFC<ListProps> = (props): ReactElement => {
  const nextProps = useStyles('List', props);
  return <Paper {...nextProps} />;
};

export default List;
