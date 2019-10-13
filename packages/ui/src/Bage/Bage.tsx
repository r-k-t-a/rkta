/** @jsx jsx */
import { ReactElement, SFC } from 'react';
import { jsx } from '@emotion/core';

import { useProviderContext } from '../Provider';
import { Props } from './Bage.type';

export const Bage: SFC<Props> = ({ children, ...rest }: Props): ReactElement => {
  const { applyStyles } = useProviderContext();

  const [nextProps, Element] = applyStyles(
    { rounded: true, overline: true, nowrap: true, ...rest },
    'Bage',
    'Paper',
    'Text',
  );

  return <Element {...nextProps}>{children}</Element>;
};
