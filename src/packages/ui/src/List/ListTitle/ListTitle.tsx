import React, { FC, ReactElement } from 'react';

import { ListItem } from '../ListItem';
import { Props } from '../ListItem/ListItem.type';

export type ListTitleProps = Props;

export const ListTitle: FC<Props> = ({ children, ...rest }: Props): ReactElement => (
  <ListItem {...rest}>{children}</ListItem>
);
ListTitle.defaultProps = {
  muted: true,
  subtitle2: true,
};
