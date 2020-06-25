/** @jsx jsx */
import { ReactElement, FC } from 'react';
import { jsx } from '@emotion/core';

import { FooterProps } from './Footer.type';
import { useProviderContext } from '../../Provider';

export const CardFooter: FC<FooterProps> = ({ children, ...rest }: FooterProps): ReactElement => {
  const { applyStyles } = useProviderContext();
  const [nextProps, Element] = applyStyles({ element: 'footer', ...rest }, 'CardFooter', 'Addon');
  return <Element {...nextProps}>{children}</Element>;
};
