/** @jsx jsx */
import { FC } from 'react';
import { jsx } from '@emotion/core';

import { useProviderContext } from '../../Provider';
import { ListItemProps } from './ListItem.type';

/**
 * ```js
 * import { ListItem, Addon } from '@rkta/ui';
 *
 * <ListItem fitAll normal underline>
 *   <Addon main>Normal</Addon>
 *   <Addon overline>48px</Addon>
 * </ListItem>
 * ```
 */
export const ListItem: FC<ListItemProps> = ({ children, ...props }): JSX.Element => {
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
