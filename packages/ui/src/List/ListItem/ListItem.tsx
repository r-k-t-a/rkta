import React, { SFC, ReactElement } from 'react';

import useStyles from '../../util/useStyles';
import Atom from '../../Atom';
import { ListItemProps } from './ListItem.defs';

const ListItem: SFC<ListItemProps> = ({
  BaseElement,
  children,
  ...props
}: ListItemProps): ReactElement => {
  const localProps = BaseElement
    ? props
    : { normal: true, hard: true, body: true, transparent: true, ...props };
  const nextProps = useStyles(localProps, 'ListItem', 'Paper', 'Addon', 'Text');
  if (BaseElement) return <BaseElement {...nextProps}>{children}</BaseElement>;
  return (
    <Atom element="div" {...nextProps}>
      {children}
    </Atom>
  );
};

export default ListItem;
