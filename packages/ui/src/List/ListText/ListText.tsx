import React, { SFC, ReactElement } from 'react';

import useStyles from '../../util/useStyles';
import Atom from '../../Atom';
import Text from '../../Text';
import { ListTextProps } from './ListText.defs';

const ListItem: SFC<ListTextProps> = ({
  label,
  description,
  ...props
}: ListTextProps): ReactElement => {
  const nextProps = useStyles(props, 'Text', 'Addon', 'ListText');
  return (
    <Atom {...nextProps} paddingY={8}>
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
