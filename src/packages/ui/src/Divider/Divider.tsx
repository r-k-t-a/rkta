/** @jsx jsx */
import { ReactElement, FC } from 'react';
import { jsx } from '@emotion/core';

import { DividerProps } from './Divider.type';
import { useProviderContext } from '../Provider';

/**
 * ```js
 * import { Paper, Divider} from '@rkta/ui';
 *
 * <Paper bgColor="primary" style={{ padding: 8 }}>
 *   Before divider
 * </Paper>
 * <Divider verticalSpace="16px" />
 * <Paper bgColor="primary" style={{ padding: 8 }}>
 *   After divider
 * </Paper>
 * ```
 */
export const Divider: FC<DividerProps> = ({ children, ...rest }): ReactElement => {
  const { applyStyles } = useProviderContext();
  const [nextProps, Element] = applyStyles({ element: 'hr', ...rest }, 'Divider');
  return <Element {...nextProps}>{children}</Element>;
};
