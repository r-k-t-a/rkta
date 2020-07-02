/** @jsx jsx */
import { FC } from 'react';
import { jsx } from '@emotion/core';

import { useProviderContext } from '../Provider';
import { SvgProps } from './Svg.type';

/**
 * ```js
 * import { Svg } from `@rkta/ui`;
 *
 * <Svg color="warning" viewBox="0 0 20 20" size={88}>
 *   <path d="M11.933 13.069s7.059-5.094 6.276-10.924a.465.465 0 0 0-.112-.268.436.436 0 0 0-.263-.115C12.137.961 7.16 8.184 7.16 8.184c-4.318-.517-4.004.344-5.974 5.076-.377.902.234 1.213.904.959l2.148-.811 2.59 2.648-.793 2.199c-.248.686.055 1.311.938.926 4.624-2.016 5.466-1.694 4.96-6.112zm1.009-5.916a1.594 1.594 0 0 1 0-2.217 1.509 1.509 0 0 1 2.166 0 1.594 1.594 0 0 1 0 2.217 1.509 1.509 0 0 1-2.166 0z" />
 * </Svg>
 * ```
 */
export const Svg: FC<SvgProps> = ({ children, ...rest }): JSX.Element => {
  const { applyStyles } = useProviderContext();
  const [nextProps] = applyStyles(rest, 'Svg');
  return <svg {...nextProps}>{children}</svg>;
};
