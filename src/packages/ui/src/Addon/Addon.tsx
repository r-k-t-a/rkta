/** @jsx jsx */
import { FC, ReactElement } from 'react';
import { jsx } from '@emotion/core';

import { useProviderContext } from '../Provider';
import { Props } from './Addon.type';

export type AddonProps = Props;

export const Addon: FC<Props> = ({ children, ...rest }: Props): ReactElement => {
  const { applyStyles } = useProviderContext();
  const [nextProps, Element] = applyStyles({ element: 'span', ...rest }, 'Addon', 'Text');
  return <Element {...nextProps}>{children}</Element>;
};
