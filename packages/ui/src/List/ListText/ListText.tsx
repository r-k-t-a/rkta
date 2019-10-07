/** @jsx jsx */
import { SFC, ReactElement } from 'react';
import { jsx } from '@emotion/core';

import useProviderContext from '../../Provider/useProviderContext';
import Text from '../../Text';
import ListText from './ListText.d';

const ListItem: SFC<ListText> = ({
  label,
  children,
  description,
  ...props
}: ListText): ReactElement => {
  const { applyStyles } = useProviderContext();
  const [nextStylesProps, Element] = applyStyles(
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
