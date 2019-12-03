/** @jsx jsx */
import { jsx } from '@emotion/core';
import { AnimationEvent, KeyboardEvent, SFC } from 'react';
import { useProviderContext } from '../Provider';
import { isTargetEvent } from '../util';
import { Props } from './Backdrop.type';

export const Backdrop: SFC<Props> = ({ close, isClosing, children, onClose, ...rest }: Props) => {
  const { applyStyles } = useProviderContext();
  const [nodeProps] = applyStyles(
    { backdropEnter: !isClosing, backdropLeave: isClosing, ...rest },
    'Backdrop',
  );
  function handleKey(event: KeyboardEvent<HTMLDivElement>): void {
    if (event.key === 'Enter' && isTargetEvent(event)) close();
  }
  function handleClose(event: AnimationEvent): void {
    if (isClosing && isTargetEvent(event)) onClose();
  }
  return (
    <div
      {...nodeProps}
      onClick={close}
      onKeyDown={handleKey}
      onAnimationEnd={handleClose}
      role="button"
      tabIndex={0}
    >
      {children}
    </div>
  );
};
