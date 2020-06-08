/** @jsx jsx */
import { ReactElement, FC } from 'react';
import { jsx } from '@emotion/core';

import { Props } from './Divider.type';
import { useProviderContext } from '../Provider';

export const Divider: FC<Props> = ({ children, ...rest }: Props): ReactElement => {
  const { applyStyles } = useProviderContext();
  const [nextProps, Element] = applyStyles({ element: 'hr', ...rest }, 'Divider');
  return <Element {...nextProps}>{children}</Element>;
};
