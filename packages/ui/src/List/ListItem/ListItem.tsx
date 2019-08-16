import React, { SFC, ReactElement } from 'react';

import useStyles from '../../util/useStyles';
import Paper from '../../Paper';
import { ListItemProps } from './ListItem.defs';

const ListItem: SFC<ListItemProps> = ({
  BaseElement,
  children,
  ...props
}: ListItemProps): ReactElement => {
  const localProps = BaseElement ? { ...props, normal: true } : props;
  const nextProps = useStyles(localProps, 'ListItem', 'Addon', 'Text');
  if (BaseElement) return <BaseElement {...nextProps}>{children}</BaseElement>;
  return (
    <Paper element="div" hard body transparent {...nextProps}>
      {children}
    </Paper>
  );
};

export default ListItem;
