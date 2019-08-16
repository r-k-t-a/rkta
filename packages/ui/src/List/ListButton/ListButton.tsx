import React, { SFC, ReactElement } from 'react';

import Button from '../../Button';
import { ListButtonProps } from './ListButton.defs';

const ListTitle: SFC<ListButtonProps> = ({ children, ...rest }: ListButtonProps): ReactElement => {
  return (
    <Button
      element="button"
      blockLevel
      transparent
      hard
      {...rest}
      composition={['ListItem', 'Button', 'Addon', 'Paper', 'Text']}
    >
      {children}
    </Button>
  );
};

export default ListTitle;
