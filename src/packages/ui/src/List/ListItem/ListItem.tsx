/** @jsx jsx */
import { FC, ReactElement } from 'react';
import { jsx } from '@emotion/core';

import { useProviderContext } from '../../Provider';
import { PaperProps } from './ListItem.type';

export const ListItem: FC<PaperProps> = ({ children, ...props }: PaperProps): ReactElement => {
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
