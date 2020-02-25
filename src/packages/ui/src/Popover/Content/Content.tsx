import React, { forwardRef, FC } from 'react';
import { createPortal } from 'react-dom';

import { upsertNode } from '../../util';
import { useProviderContext } from '../../Provider';
import { Props } from './Content.type';

export const Content: FC<Props> = forwardRef(
  ({ children, handleAnimationEnd, ...rest }: Props, ref): JSX.Element => {
    const { applyStyles } = useProviderContext();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [{ align, offset, ...elementProps }, Element] = applyStyles(rest, 'Popover');
    const element = upsertNode('ui-popover');
    return createPortal(
      <Element {...elementProps} ref={ref} onAnimationEnd={handleAnimationEnd}>
        {children}
      </Element>,
      element,
    );
  },
);
