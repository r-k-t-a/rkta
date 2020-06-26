/** @jsx jsx */
import { FC, ReactElement } from 'react';
import { jsx } from '@emotion/core';

import { useProviderContext } from '../../Provider';
import { Text } from '../../Text';
import { ListTextProps } from './ListText.type';

export const ListText: FC<ListTextProps> = ({
  label,
  children,
  description,
  ...props
}): ReactElement => {
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
