/** @jsx jsx */
import { FC } from 'react';
import { jsx } from '@emotion/core';

import { useProviderContext } from '../Provider';
import { LinearProgressProps } from './LinearProgress.type';

/**
 * ```js
 * import { LinearProgress } from '@rkta/ui';
 *
 * <LinearProgress color="secondary" />
 * ```
 */
export const LinearProgress: FC<LinearProgressProps> = (props): JSX.Element => {
  const { applyStyles } = useProviderContext();
  const [nextProps] = applyStyles(props, 'LinearProgress');
  return <progress {...nextProps} />;
};
