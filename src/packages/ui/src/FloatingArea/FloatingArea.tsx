/* eslint-disable @typescript-eslint/no-unused-vars */
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
 *  import { useState } from 'react'
 *
 * () => {
 *   const [active, setActive] = useState(false);
 *   const [target, setTarget] = useState(null);
 *   const show = (event) => {
 *     setTarget(event.target);
 *     setActive(true);
 *   };
 *   return (
 *   <div style={{ display: 'flex', justifyContent: 'space-between', padding: 8 }}>
 *    <Button bgColor="primary" onClick={show}>
 *       Target 1
 *    </Button>
 *  <FloatingArea producer={target} active={active} offset={8}>
 *     <List rize={1}>
 *        <ListTitle>Floating Area</ListTitle>
 *        <ListButton nowrap>Option 1</ListButton>
 *        <ListButton nowrap>Option 2</ListButton>
 *        <ListButton nowrap>Option 3</ListButton>
 *     </List>
 *   </FloatingArea>
 * </div>
 * );
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
