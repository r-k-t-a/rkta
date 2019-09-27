import React, { forwardRef, SFC } from 'react';

import Button from '../../Button';
import { ListButtonProps } from './ListButton.defs';

const ListButton: SFC<ListButtonProps> = forwardRef(
  ({ children, ...rest }: ListButtonProps, ref): JSX.Element => {
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
  },
);

export default ListButton;
