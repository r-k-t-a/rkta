import React, { SFC, ReactElement } from 'react';

import Button from '../../Button';
import ListItem from '../ListItem';
import { ListButtonProps } from './ListButton.d';

const ListTitle: SFC<ListButtonProps> = ({ children, ...rest }: ListButtonProps): ReactElement => {
  return (
    <ListItem BaseElement={Button} element="button" hard blockLevel body transparent {...rest}>
      {children}
    </ListItem>
  );
};

export default ListTitle;
