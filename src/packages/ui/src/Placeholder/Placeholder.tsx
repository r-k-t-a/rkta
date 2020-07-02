/** @jsx jsx */
import { FC } from 'react';
import { jsx } from '@emotion/core';

import { useProviderContext } from '../Provider';
import { PlaceholderProps } from './Placeholder.type';

/**
 * ```js
 * import { Placeholder, Text } from '@rkta/ui';
 *
 * <Text color="primary">
 *   <Placeholder width="7em">{undefined}</Placeholder>
 * </Text>
 * ```
 */
export const Placeholder: FC<PlaceholderProps> = ({ children, element, ...rest }): JSX.Element => {
  if (children) return children as JSX.Element;
  const { applyStyles } = useProviderContext();
  const [nextProps, Element] = applyStyles({ element, ...rest }, 'Placeholder');
  return <Element {...nextProps} />;
};

Placeholder.defaultProps = {
  element: 'span',
};
