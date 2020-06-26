/** @jsx jsx */
import { ReactElement, FC } from 'react';
import { jsx } from '@emotion/core';

import { AddonProps } from './Header.type';
import { useProviderContext } from '../../Provider';

export const CardHeader: FC<AddonProps> = ({ children, ...rest }): ReactElement => {
  const { applyStyles } = useProviderContext();
  const [nextProps, Element] = applyStyles({ element: 'header', ...rest }, 'CardHeader', 'Addon');
  return <Element {...nextProps}>{children}</Element>;
};
