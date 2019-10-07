/** @jsx jsx */
import { SFC, ReactElement } from 'react';
import { jsx } from '@emotion/core';

import useProviderContext from '../../Provider/useProviderContext';
import ListItem from './ListItem.d';

const ListItem: SFC<ListItem> = ({ children, ...props }: ListItem): ReactElement => {
  const { applyStyles } = useProviderContext();
  const [nextProps, Element] = applyStyles(
    { normal: true, hard: true, body: true, transparent: true, ...props },
    'ListItem',
    'Paper',
    'Addon',
    'Text',
  );
  return <Element {...nextProps}>{children}</Element>;
};

export default ListItem;
