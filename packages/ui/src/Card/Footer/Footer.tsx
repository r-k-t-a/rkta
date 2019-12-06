/** @jsx jsx */
import { ReactElement, SFC } from 'react';
import { jsx } from '@emotion/core';

import { Props } from './Footer.type';
import { useProviderContext } from '../../Provider';

export const CardFooter: SFC<Props> = ({ children, ...rest }: Props): ReactElement => {
  const { applyStyles } = useProviderContext();
  const [nextProps, Element] = applyStyles({ element: 'footer', ...rest }, 'CardFooter', 'Addon');
  return <Element {...nextProps}>{children}</Element>;
};
