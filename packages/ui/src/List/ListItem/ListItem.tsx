import React, { SFC, ReactElement } from 'react';

import useProviderContext from '../../Provider/useProviderContext';

import Atom from '../../Atom';
import { ListItemProps } from './ListItem.defs';

const ListItem: SFC<ListItemProps> = ({ children, ...props }: ListItemProps): ReactElement => {
  const { useStyles } = useProviderContext();
  const nextProps = useStyles(
    { normal: true, hard: true, body: true, transparent: true, ...props },
    'ListItem',
    'Paper',
    'Addon',
    'Text',
  );
  return (
    <Atom element="div" {...nextProps}>
      {children}
    </Atom>
  );
};

export default ListItem;
