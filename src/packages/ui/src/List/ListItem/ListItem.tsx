/** @jsx jsx */
import { FC, ReactElement } from 'react';
import { jsx } from '@emotion/core';

import { useProviderContext } from '../../Provider';
import { Props } from './ListItem.type';

export type ListItemProps = Props;

export const ListItem: FC<Props> = ({ children, ...props }: Props): ReactElement => {
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
