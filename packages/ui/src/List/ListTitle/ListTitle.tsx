import React, { SFC, ReactElement } from 'react';

import { ListItem } from '../ListItem';
import { Props } from '../ListItem/ListItem.type';

export const ListTitle: SFC<Props> = ({ children, ...rest }: Props): ReactElement => (
  <ListItem {...rest}>{children}</ListItem>
);
ListTitle.defaultProps = {
  muted: true,
  subtitle2: true,
};
