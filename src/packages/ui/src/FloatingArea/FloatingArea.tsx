/* eslint-disable @typescript-eslint/no-unused-vars */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC, useRef } from 'react';
import { createPortal } from 'react-dom';
import { usePositionAttachment } from '@rkta/hooks';

import { Cache } from '../Cache';
import { upsertNode, isNodeJS } from '../util';
import { useProviderContext } from '../Provider';
import { useFloatingArea, OUT, ENTER, EXIT } from './useFloatingArea';
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
  if (!isNodeJS) return null;
  const mountNode = upsertNode(mountNodeId);
  const [phase, handleAnimationEnd] = useFloatingArea({
    active,
    consumer,
    onHide,
    producer,
  });
  const { applyStyles } = useProviderContext();

  const visible = positionAttachmentStyles !== null;
  const hasTransition = [ENTER, EXIT].includes(phase);
  const animate = visible && hasTransition;

  const [{ producer: p, phase: ph, offset: o, align: a, ...elementProps }, Element] = applyStyles(
    { ...rest, align, animate, offset, phase, producer, visible },
    'FloatingArea',
  );

  return createPortal(
    phase === OUT ? null : (
      <Element
        {...elementProps}
        key={animate}
        onAnimationEnd={handleAnimationEnd}
        style={{
          ...positionAttachmentStyles,
          ...style,
        }}
        ref={consumer}
      >
        <Cache disabled={hasTransition}>{children}</Cache>
      </Element>
    ),
    mountNode,
  );
};
