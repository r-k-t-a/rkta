/** @jsx jsx */
import { ReactElement, SFC } from 'react';
import { jsx } from '@emotion/core';

import { Props } from './Header.type';
import { useProviderContext } from '../../Provider';

export const CardHeader: SFC<Props> = ({ children, ...rest }: Props): ReactElement => {
  const { applyStyles } = useProviderContext();
  const [nextProps, Element] = applyStyles({ element: 'header', ...rest }, 'CardHeader', 'Addon');
  return <Element {...nextProps}>{children}</Element>;
};
