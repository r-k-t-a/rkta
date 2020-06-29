/** @jsx jsx */
import { FC, ReactElement } from 'react';
import { jsx } from '@emotion/core';

import { useProviderContext } from '../Provider';
import { SpinnerProps } from './Spinner.type';

/**
 * ```js
 * import { Spinner } from '@rkta/ui';
 *
 * <Spinner />
 * <Spinner color="secondary" size={80} borderWidth={6} css={{ marginTop: 40 }} />
 * ```
 */
export const Spinner: FC<SpinnerProps> = (props): ReactElement => {
  const { applyStyles } = useProviderContext();
  const [nextProps, Element] = applyStyles(props, 'Spinner');
  return <Element {...nextProps} />;
};

Spinner.defaultProps = {
  borderWidth: '2.4px',
  color: 'inherit',
  size: '24px',
};
