import React, { forwardRef, SFC } from 'react';

import Button from '../../Button';
import ListButton from './ListButton.d';

const ListButton: SFC<ListButton> = forwardRef(
  ({ children, ...rest }: ListButton, ref): JSX.Element => {
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
