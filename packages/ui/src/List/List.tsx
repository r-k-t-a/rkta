import React, { SFC, ReactElement } from 'react';

import { ListProps } from './List.d';
import Paper from '../Paper';
import useStyles from '../util/useStyles';

const List: SFC<ListProps> = (props): ReactElement => {
  const nextProps = useStyles('List', props);
  return <Paper {...nextProps} />;
};

export default List;
