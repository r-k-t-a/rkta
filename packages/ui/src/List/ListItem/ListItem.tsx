/** @jsx jsx */
import { SFC, ReactElement } from 'react';
import { jsx } from '@emotion/core';

import useProviderContext from '../../Provider/useProviderContext';

import { ListItemProps } from './ListItem.defs';

const ListItem: SFC<ListItemProps> = ({ children, ...props }: ListItemProps): ReactElement => {
  const { useStyles } = useProviderContext();
  const [nextProps, Element] = useStyles(
    { normal: true, hard: true, body: true, transparent: true, ...props },
    'ListItem',
    'Paper',
    'Addon',
    'Text',
  );
  return <Element {...nextProps}>{children}</Element>;
};

export default ListItem;
