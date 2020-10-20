/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC, useRef } from 'react';
import { createPortal } from 'react-dom';
import { usePositionAttachment } from '@rkta/hooks';

import { upsertNode, isNodeJS } from '../util';
import { useProviderContext } from '../Provider';
import { useFloatingArea, OUT, ENTER, EXIT } from './useFloatingArea';
import { FloatingAreaProps } from './FloatingArea.type';

/**
 * ```js
 *  import { FloatingArea, List, ListTitle, ListButton, Divider, Button } from '@rkta/ui';
 * <FloatingArea active={active} producer?={target} offset?={8}>
 *   ...
 * </FloatingArea>
 * ```
 */
export const FloatingArea: FC<FloatingAreaProps> = ({
  active,
  align,
  children,
  mountNodeId = 'ui-floating-area',
  offset,
  onClose,
  onEscape,
  onFxIn,
  onFxOut,
  producer,
  style,
  ...rest
}) => {
  const consumer = useRef<HTMLElement>(null);
  const positionAttachmentStyles = usePositionAttachment({ align, consumer, offset, producer });
  if (isNodeJS) return null;
  const mountNode = upsertNode(mountNodeId);
  const [phase, handleAnimationEnd] = useFloatingArea({
    active,
    consumer,
    onClose,
    onEscape,
    onFxIn,
    onFxOut,
    producer,
  });
  const { applyStyles } = useProviderContext();

  if (phase === OUT) return null;

  const visible = positionAttachmentStyles !== null;
  const hasTransition = [ENTER, EXIT].includes(phase);
  const animate = visible && hasTransition;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [{ producer: p, phase: ph, offset: o, align: a, ...elementProps }, Element] = applyStyles(
    { ...rest, align, animate, offset, phase, producer, visible },
    'FloatingArea',
  );

  return createPortal(
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
      {children}
    </Element>,
    mountNode,
  );
};
