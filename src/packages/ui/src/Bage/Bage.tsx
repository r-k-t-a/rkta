/** @jsx jsx */
import { ReactElement, FC } from 'react';
import { jsx } from '@emotion/core';

import { useProviderContext } from '../Provider';
import { BageProps } from './Bage.type';

export const Bage: FC<BageProps> = ({ children, ...rest }: BageProps): ReactElement => {
  const { applyStyles } = useProviderContext();

  const [nextProps, Element] = applyStyles(
    { rounded: true, overline: true, nowrap: true, ...rest },
    'Bage',
    'Paper',
    'Text',
  );

  return <Element {...nextProps}>{children}</Element>;
};
