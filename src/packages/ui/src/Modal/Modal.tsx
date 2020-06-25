/** @jsx jsx */
import { jsx } from '@emotion/core';
import { forwardRef, FC, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop } from '../Backdrop';
import { Cache } from '../Cache';

import { ModalProps } from './Modal.type';
import { useModal } from './useModal';
import { upsertNode } from '../util';

export const Modal: FC<ModalProps> = forwardRef<HTMLElement, ModalProps>(
  ({ align, children, onClose, visible, ...rest }: ModalProps, ref): JSX.Element | null => {
    const defaultRef = useRef<HTMLElement>(null);
    const backdropRef = ref || defaultRef;
    const { backdropIsVisible, onBackdropFade, shouldRender } = useModal(visible);
    if (!shouldRender) return null;
    const element = upsertNode('ui-modal');
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
