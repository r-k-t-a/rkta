/** @jsx jsx */
import { FC } from 'react';
import { jsx } from '@emotion/core';

import { AddonProps } from './Header.type';
import { useProviderContext } from '../../Provider';

/**
 * ```js
 * import { CardHeader } from '@rkta/ui';
 *
 * <CardHeader fitRight>
 *  CardHeader
 * </CardHeader>
 * ```
 */
export const CardHeader: FC<AddonProps> = ({ children, ...rest }): JSX.Element => {
  const { applyStyles } = useProviderContext();
  const [nextProps, Element] = applyStyles({ element: 'header', ...rest }, 'CardHeader', 'Addon');
  return <Element {...nextProps}>{children}</Element>;
};
