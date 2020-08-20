/** @jsx jsx */
import { FC } from 'react';
import { jsx } from '@emotion/core';

import { ContainerProps } from './Container.type';
import { useProviderContext } from '../Provider';

/**
 * ```js
 * import { Paper, Container} from '@rkta/ui';
 *
 * <Container width="laptop" fixed={false}>
 *   Content
 * </Container>
 * ```
 */
export const Container: FC<ContainerProps> = ({ children, ...rest }): JSX.Element => {
  const { applyStyles } = useProviderContext();
  const [nextProps, Element] = applyStyles(rest, 'Container');
  return <Element {...nextProps}>{children}</Element>;
};
