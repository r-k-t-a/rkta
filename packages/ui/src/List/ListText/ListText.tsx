/** @jsx jsx */
import { SFC, ReactElement } from 'react';
import { jsx } from '@emotion/core';

import useProviderContext from '../../Provider/useProviderContext';
import Text from '../../Text';
import { ListTextProps } from './ListText.defs';

const ListItem: SFC<ListTextProps> = ({
  label,
  children,
  description,
  ...props
}: ListTextProps): ReactElement => {
  const { useStyles } = useProviderContext();
  const [nextStylesProps, Element] = useStyles(
    { paddingY: 8, ...props },
    'ListText',
    'Addon',
    'Text',
  );
  const nextProps = { ...nextStylesProps, children };
  return (
    <Element {...nextProps}>
      {label}
      {description && (
        <Text caption muted>
          {description}
        </Text>
      )}
    </Element>
  );
};

export default ListItem;
