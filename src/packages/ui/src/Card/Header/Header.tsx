/** @jsx jsx */
import { ReactElement, FC } from 'react';
import { jsx } from '@emotion/core';

import { Props } from './Header.type';
import { useProviderContext } from '../../Provider';

export type CardHeaderProps = Props;

export const CardHeader: FC<Props> = ({ children, ...rest }: Props): ReactElement => {
  const { applyStyles } = useProviderContext();
  const [nextProps, Element] = applyStyles({ element: 'header', ...rest }, 'CardHeader', 'Addon');
  return <Element {...nextProps}>{children}</Element>;
};
