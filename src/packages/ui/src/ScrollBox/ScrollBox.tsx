/** @jsx jsx */
import { FC, forwardRef } from 'react';
import { jsx } from '@emotion/core';

import { ScrollBoxProps } from './ScrollBox.type';
import { useProviderContext } from '../Provider';
import useAnimation from './useAnimation';

/**
 * ```js
 * import { ScrollBox, Button, Divider, Paper } from '@rkta/ui';
 * import Range from 'lodash/range';
 *
 * <ScrollBox x bgColor="warning">
 *   {Range(0, 50).map(item => (
 *     <Paper
 *       bgColor="primary"
 *       center
 *       size={50}
 *       css={{ margin: 4, flexShrink: 0, lineHeight: '50px' }}
 *       key={item}
 *     >
 *       {item}
 *     </Paper>
 *   ))}
 * </ScrollBox>
 *
 * ```
 */
// eslint-disable-next-line react/prop-types
export const ScrollBox: FC<ScrollBoxProps> = forwardRef(
  ({ children, visible, ...rest }, ref): JSX.Element => {
    const { applyStyles } = useProviderContext();

    const animationProps = useAnimation(visible);
    const extraProps =
      !rest.animateHeight || typeof rest.height !== 'undefined' ? null : animationProps;

    const [nextProps, Element] = applyStyles(
      { ...rest, ...extraProps },
      'ScrollBox',
      'Paper',
      'Text',
    );
    return (
      <Element {...nextProps} ref={ref}>
        {children}
      </Element>
    );
  },
);
