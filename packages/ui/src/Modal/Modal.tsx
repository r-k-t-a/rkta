/** @jsx jsx */
import { jsx } from '@emotion/core';
import { SFC, SyntheticEvent } from 'react';
import { Backdrop } from '../Backdrop';

import { Props } from './Modal.type';
import { useModal } from './useModal';
import { useProviderContext } from '../Provider';

export const Modal: SFC<Props> = ({ align, children, onClose, visible, ...rest }: Props) => {
  const { isClosing, shouldRender, ...backdropProps } = useModal(visible, onClose);
  const { applyStyles } = useProviderContext();
  if (!shouldRender) return null;
  const [{ css }, Element] = applyStyles({ align, isClosing }, 'Modal');
  return (
    <Backdrop {...rest} {...backdropProps} align={align} isClosing={isClosing}>
      <Element
        css={css}
        onClick={(event: SyntheticEvent<MouseEvent>): void => event.stopPropagation()}
      >
        {children}
      </Element>
    </Backdrop>
  );
};
