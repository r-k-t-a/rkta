import React, { SFC, ReactElement } from 'react';

import useStyles from '../../util/useStyles';
import Addon from '../../Addon';
import Text from '../../Text';
import { ListTextProps } from './ListText.d';

const ListItem: SFC<ListTextProps> = ({
  label,
  description,
  ...props
}: ListTextProps): ReactElement => {
  const nextProps = useStyles('ListText', props);
  return (
    <Addon {...nextProps} paddingY={8}>
      {label}
      {description && (
        <Text caption muted>
          {description}
        </Text>
      )}
    </Addon>
  );
};

export default ListItem;
