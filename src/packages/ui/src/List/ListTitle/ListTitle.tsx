import React, { FC } from 'react';

import { ListItem } from '../ListItem';
import { PaperProps } from '../ListItem/ListItem.type';

export const ListTitle: FC<PaperProps> = ({ children, ...rest }): JSX.Element => (
  <ListItem {...rest}>{children}</ListItem>
);
ListTitle.defaultProps = {
  muted: true,
  subtitle2: true,
};
