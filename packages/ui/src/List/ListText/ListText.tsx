/** @jsx jsx */
import { SFC, ReactElement } from 'react';
import { jsx } from '@emotion/core';

import { useProviderContext } from '../../Provider';
import { Text } from '../../Text';
import { Props } from './ListText.type';

export const ListText: SFC<Props> = ({
  label,
  children,
  description,
  ...props
}: Props): ReactElement => {
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
