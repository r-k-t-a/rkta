import React, { SFC, ReactElement } from 'react';

import useStyles from '../../util/useStyles';
import Atom from '../../Atom';
import Paper from '../../Paper';
import { ListItemProps } from './ListItem.defs';

const ListItem: SFC<ListItemProps> = ({
  BaseElement,
  children,
  ...props
}: ListItemProps): ReactElement => {
  const nextProps = useStyles(props, 'Text', 'Addon', 'ListItem');
  if (BaseElement) return <BaseElement {...nextProps}>{children}</BaseElement>;
  return (
    <Atom BaseElement={Paper} element="div" hard normal body transparent {...nextProps}>
      {children}
    </Atom>
  );
};

export default ListItem;
