import React, { SFC, ReactElement } from 'react';

import ListItem from '../ListItem';
import { ListItemProps } from '../ListItem/ListItem.d';

const ListTitle: SFC<ListItemProps> = ({ children, ...rest }: ListItemProps): ReactElement => (
  <ListItem {...rest}>{children}</ListItem>
);
ListTitle.defaultProps = {
  muted: true,
  subtitle2: true,
};

export default ListTitle;
