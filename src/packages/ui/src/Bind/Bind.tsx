/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC, useRef } from 'react';
import { createPortal } from 'react-dom';

import { upsertNode } from '../util';
import { useProviderContext } from '../Provider';
import { useBind } from './useBind';
import { Props } from './Bind.type';

export const Bind: FC<Props> = ({
  children,
  onHide,
  to,
  visible,
  ...rest
}: Props): JSX.Element | null => {
  const ref = useRef<HTMLElement>(null);
  const { fx, bounds, shouldRender } = useBind({
    container: ref,
    isVisible: visible,
    onHide,
    trigger: to,
  });
  const mountTo = upsertNode('ui-popover');
  const { applyStyles } = useProviderContext();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [{ align, offset, ...elementProps }, Element] = applyStyles(
    { ...rest, bounds, fx },
    'Bind',
  );

  return shouldRender
    ? createPortal(
        // eslint-disable-next-line react/jsx-indent
        <Element {...elementProps} ref={ref}>
          {children}
        </Element>,
        mountTo,
      )
    : null;
};
