import React, { forwardRef } from 'react';

import { Button } from '../../Button';
import { ListButtonProps } from './ListButton.type';

/**
 * ```js
 * import { ListButton, Addon } from '@rkta/ui'
 *
 * <ListButton fitAll tiny>
 *   <Addon main>Tiny</Addon>
 *   <Addon overline>32px</Addon>
 * </ListButton>
 *
 * ```
 */
export const ListButton = forwardRef(function ListButton(
  { children, ...rest }: ListButtonProps,
  ref,
): JSX.Element {
  return (
    <Button
      blockLevel
      transparent
      hard
      body
      {...rest}
      composition={['ListItem', 'Button', 'Addon', 'Paper', 'Text']}
      ref={ref}
    >
      {children}
    </Button>
  );
});
