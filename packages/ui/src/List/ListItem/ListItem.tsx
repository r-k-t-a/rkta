import React, { SFC, ReactElement } from 'react';

import useStyles from '../../util/useStyles';
import Addon from '../../Addon';
import Paper from '../../Paper';
import { ListItemProps } from './ListItem.defs';

const ListItem: SFC<ListItemProps> = ({
  BaseElement,
  children,
  ...props
}: ListItemProps): ReactElement => {
  const nextProps = useStyles('ListItem', props);
  if (BaseElement) return <BaseElement {...nextProps}>{children}</BaseElement>;
  return (
    <Addon BaseElement={Paper} element="div" hard normal body transparent {...nextProps}>
      {children}
    </Addon>
  );
};

export default ListItem;
