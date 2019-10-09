import React, { forwardRef, SFC } from 'react';

import Button from '../../Button';
import Props from './ListButton.d';

const ListButton: SFC<Props> = forwardRef(
  ({ children, ...rest }: Props, ref): JSX.Element => {
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
