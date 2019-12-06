/** @jsx jsx */
import { ReactElement, SFC } from 'react';
import { jsx } from '@emotion/core';

import { Props } from './Card.type';
import { useProviderContext } from '../Provider';

export const Card: SFC<Props> = ({ children, ...rest }: Props): ReactElement => {
  const { applyStyles } = useProviderContext();
  const [nextProps, Element] = applyStyles(rest, 'Paper', 'Text');
  return <Element {...nextProps}>{children}</Element>;
};
