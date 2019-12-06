/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC, forwardRef, useEffect, RefObject } from 'react';
import { useIsMounted } from '@rkta/hooks';

import { useProviderContext } from '../Provider';
import { Props } from './Backdrop.type';
import { isTargetEvent } from '../util';

export const Backdrop: FC<Props> = forwardRef<HTMLElement, Props>(
  ({ onClick, visible, children, onFadeOut, ...rest }: Props, ref): JSX.Element => {
    const isMounted = useIsMounted();
    const { applyStyles } = useProviderContext();
    const [nodeProps, Element] = applyStyles(
      { backdropEnter: visible, backdropLeave: !visible, onClick, ...rest },
      'Backdrop',
    );
    function handleClick(event: Event): void {
      if (onClick && isTargetEvent(event)) onClick();
    }
    function handleKey(event: KeyboardEvent): void {
      if (event.key === 'Escape' && onClick) onClick();
    }
    function handleAnimationEnd(event: Event): void {
      if (!visible && event.eventPhase === event.AT_TARGET && onFadeOut) onFadeOut();
    }
    const refObject = ref as RefObject<HTMLElement>;
    const currentRef = refObject && refObject.current;
    function effect(): () => void {
      window.addEventListener('keydown', handleKey, false);
      if (currentRef) {
        currentRef.addEventListener('animationend', handleAnimationEnd, false);
        currentRef.addEventListener('click', handleClick, false);
      }
      return (): void => {
        window.removeEventListener('keydown', handleKey);
        if (currentRef) {
          currentRef.removeEventListener('animationend', handleAnimationEnd);
          currentRef.removeEventListener('click', handleClick);
        }
      };
    }
    useEffect(effect, [isMounted, visible, currentRef]);
    return (
      <Element {...nodeProps} ref={ref} role={onClick ? 'button' : 'dialog'} tabIndex={0}>
        {children}
      </Element>
    );
  },
);
