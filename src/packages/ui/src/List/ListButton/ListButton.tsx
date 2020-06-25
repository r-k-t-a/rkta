import React, { forwardRef } from 'react';

import { Button } from '../../Button';
import { ListButtonProps } from './ListButton.type';

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
