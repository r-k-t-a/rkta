import React, { FC } from 'react';

import { ListItem } from '../ListItem';
import { ListItemProps } from '../ListItem/ListItem.type';

/**
 * ```js
 * import { ListTitle } from '@rkta/ui';
 *
 * <ListTitle>Title</ListTitle>
 * ```
 */
export const ListTitle: FC<ListItemProps> = ({ children, ...rest }): JSX.Element => (
  <ListItem {...rest}>{children}</ListItem>
);
ListTitle.defaultProps = {
  muted: true,
  subtitle2: true,
};
