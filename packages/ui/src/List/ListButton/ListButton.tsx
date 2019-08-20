import React, { SFC, ReactElement } from 'react';

import Button from '../../Button';
import { ListButtonProps } from './ListButton.defs';

const ListButton: SFC<ListButtonProps> = ({ children, ...rest }: ListButtonProps): ReactElement => {
  return (
    <Button
      blockLevel
      transparent
      hard
      body
      {...rest}
      composition={['ListItem', 'Button', 'Addon', 'Paper', 'Text']}
    >
      {children}
    </Button>
  );
};

export default ListButton;
