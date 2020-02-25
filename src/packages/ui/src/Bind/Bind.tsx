import React, { forwardRef } from 'react';
import { createPortal } from 'react-dom';

import { upsertNode } from '../util';
import { useProviderContext } from '../Provider';
import { useBounds } from './useBounds';
import { Props } from './Bind.type';

export const Bind = forwardRef<HTMLElement, Props>(
  ({ children, onAnimationEnd, to, ...rest }: Props, ref): JSX.Element => {
    const bounds = useBounds(to);
    const { applyStyles } = useProviderContext();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [{ align, offset, ...elementProps }, Element] = applyStyles({ ...rest, bounds }, 'Bind');
    const mountTo = upsertNode('ui-popover');
    return createPortal(
      <Element {...elementProps} ref={ref} onAnimationEnd={onAnimationEnd}>
        {children}
      </Element>,
      mountTo,
    );
  },
);
