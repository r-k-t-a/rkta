/** @jsx jsx */
import { FC } from 'react';
import { jsx } from '@emotion/core';

import { useProviderContext } from '../Provider';
import { PaperProps } from './Paper.type';

/**
 * ```js
 * import { Paper } from '@rkta/ui';
 *
 * <Paper css={{ padding: 8 }} rize={1}>
 *   Rized paper
 * </Paper>
 * ```
 */
export const Paper: FC<PaperProps> = ({ children, ...rest }): JSX.Element => {
  const { applyStyles } = useProviderContext();
  const [nextProps, Element] = applyStyles(rest, 'Paper', 'Text');
  return <Element {...nextProps}>{children}</Element>;
};
