/** @jsx jsx */
import { FC } from 'react';
import { jsx } from '@emotion/core';

import { useProviderContext } from '../Provider';
import { TextProps } from './Text.type';

/**
 * ```js
 * import { Text } from '@rkta/ui';
 *
 * <Text caption muted element="div">
 *   h1
 * </Text>
 * ```
 */
export const Text: FC<TextProps> = ({ children, element, ...rest }): JSX.Element => {
  const { applyStyles } = useProviderContext();
  const [nextProps, Element] = applyStyles({ element, ...rest }, 'Text');
  return <Element {...nextProps}>{children}</Element>;
};

Text.defaultProps = {
  element: 'span',
};
