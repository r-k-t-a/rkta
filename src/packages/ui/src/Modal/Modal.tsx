/** @jsx jsx */
import { jsx } from '@emotion/core';
import { forwardRef, FC, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop } from '../Backdrop';
import { Cache } from '../Cache';

import { Props } from './Modal.type';
import { useModal } from './useModal';

function findNode(id: string): HTMLElement {
  const node = document.getElementById(id);
  if (node) return node;
  const element = document.createElement('div');
  element.id = id;
  document.body.appendChild(element);
  return element;
}

export const Modal: FC<Props> = forwardRef<HTMLElement, Props>(
  ({ align, children, onClose, visible, ...rest }: Props, ref): JSX.Element | null => {
    const defaultRef = useRef<HTMLElement>(null);
    const backdropRef = ref || defaultRef;
    const { backdropIsVisible, onBackdropFade, shouldRender } = useModal(visible);
    if (!shouldRender) return null;
    const element = findNode('ui-modal');
    return createPortal(
      <Backdrop
        {...rest}
        align={align}
        visible={backdropIsVisible}
        onClick={onClose}
        onFadeOut={onBackdropFade}
        ref={backdropRef}
      >
        <Cache disabled={visible}>{children}</Cache>
      </Backdrop>,
      element,
    );
  },
);
