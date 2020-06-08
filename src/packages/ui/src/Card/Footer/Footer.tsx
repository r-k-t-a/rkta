/** @jsx jsx */
import { ReactElement, FC } from 'react';
import { jsx } from '@emotion/core';

import { Props } from './Footer.type';
import { useProviderContext } from '../../Provider';

export type CardFooterProps = Props;

export const CardFooter: FC<Props> = ({ children, ...rest }: Props): ReactElement => {
  const { applyStyles } = useProviderContext();
  const [nextProps, Element] = applyStyles({ element: 'footer', ...rest }, 'CardFooter', 'Addon');
  return <Element {...nextProps}>{children}</Element>;
};
