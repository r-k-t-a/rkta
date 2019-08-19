import React, { SFC, ReactElement } from 'react';

import useProviderContext from '../../Provider/useProviderContext';
import Atom from '../../Atom';
import Text from '../../Text';
import { ListTextProps } from './ListText.defs';

const ListItem: SFC<ListTextProps> = ({
  label,
  children,
  description,
  ...props
}: ListTextProps): ReactElement => {
  const { useStyles } = useProviderContext();
  const nextProps = {
    ...useStyles({ ...props, paddingY: 8 }, 'ListText', 'Addon', 'Text'),
    children,
  };
  return (
    <Atom {...nextProps}>
      {label}
      {description && (
        <Text caption muted>
          {description}
        </Text>
      )}
    </Atom>
  );
};

export default ListItem;
