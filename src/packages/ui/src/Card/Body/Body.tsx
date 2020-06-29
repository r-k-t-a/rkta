/** @jsx jsx */
import { FC } from 'react';
import { jsx } from '@emotion/core';

import { TextProps } from './Body.type';
import { useProviderContext } from '../../Provider';

export const CardBody: FC<TextProps> = ({ children, ...rest }): JSX.Element => {
  const { applyStyles } = useProviderContext();
  const [nextProps, Element] = applyStyles({ element: 'section', ...rest }, 'CardBody', 'Text');
  return <Element {...nextProps}>{children}</Element>;
};
