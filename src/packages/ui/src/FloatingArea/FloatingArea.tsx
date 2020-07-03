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
}) => {
  const consumer = useRef<HTMLElement>(null);
  const positionAttachmentStyles = usePositionAttachment({ align, consumer, offset, producer });
  const mountNode = upsertNode(mountNodeId);
  const phase = useFloatingArea({
    active,
    consumer,
    onHide,
  });
  const { applyStyles } = useProviderContext();

  if (phase === HIDDEN) return null;

  const [{ ...elementProps }, Element] = applyStyles(
    { ...rest, transition, phase, producer, offset, align },
    'FloatingArea',
  );

  return createPortal(
    phase === HIDDEN ? null : (
      <Element
        {...elementProps}
        key={!positionAttachmentStyles}
        style={{
          ...positionAttachmentStyles,
          ...style,
        }}
        ref={consumer}
      >
        {children}
      </Element>
    ),
    mountNode,
  );
};
