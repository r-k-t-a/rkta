/** @jsx jsx */
import { ReactElement, FC } from 'react';
import { jsx } from '@emotion/core';

import { TextProps } from './Body.type';
import { useProviderContext } from '../../Provider';

/**
 * ```js
 * import { CardBody } from '@rkta/ui';
 *
 * <CardBody color="textSecondary">
 *  CardBody
 * </CardBody>
 * ```
 */
export const CardBody: FC<TextProps> = ({ children, ...rest }): ReactElement => {
  const { applyStyles } = useProviderContext();
  const [nextProps, Element] = applyStyles({ element: 'section', ...rest }, 'CardBody', 'Text');
  return <Element {...nextProps}>{children}</Element>;
};
