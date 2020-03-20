import React, { forwardRef, FC } from 'react';

import { Button } from '../../Button';
import { Props } from './ListButton.type';

export const ListButton = forwardRef(function ListButton(
  { children, ...rest }: Props,
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
