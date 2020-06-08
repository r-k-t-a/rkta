/** @jsx jsx */
import { ReactElement, FC } from 'react';
import { jsx } from '@emotion/core';

import { Props } from './Body.type';
import { useProviderContext } from '../../Provider';

export const CardBody: FC<Props> = ({ children, ...rest }: Props): ReactElement => {
  const { applyStyles } = useProviderContext();
  const [nextProps, Element] = applyStyles({ element: 'section', ...rest }, 'CardBody', 'Text');
  return <Element {...nextProps}>{children}</Element>;
};
