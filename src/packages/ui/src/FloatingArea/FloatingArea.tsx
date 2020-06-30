/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC, useRef } from 'react';
import { createPortal } from 'react-dom';
import { usePositionAttachment } from '@rkta/hooks';

import { upsertNode } from '../util';
import { useProviderContext } from '../Provider';
import { useFloatingArea, HIDDEN } from './useFloatingArea';
import { FloatingAreaProps } from './FloatingArea.type';

export const FloatingArea: FC<FloatingAreaProps> = ({
  active,
  align,
  children,
  mountNodeId = 'ui-floating-area',
  offset,
  onHide,
  producer,
  style,
  ...rest
}): JSX.Element | null => {
  const consumer = useRef<HTMLElement>(null);
  const positionAttachmentStyles = usePositionAttachment({ align, consumer, offset, producer });
  const mountNode = upsertNode(mountNodeId);
  const fx = useFloatingArea({ active, consumer, onHide });
  const { applyStyles } = useProviderContext();

  console.log('positionAttachmentStyles', positionAttachmentStyles);

  if (fx === HIDDEN) return null;
  const [{ ...elementProps }, Element] = applyStyles({ ...rest, fx }, 'FloatingArea');

  return createPortal(
    <Element {...elementProps} style={{ ...positionAttachmentStyles, ...style }} ref={consumer}>
      {children}
    </Element>,
    mountNode,
  );
};
