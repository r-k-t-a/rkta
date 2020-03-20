/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC, forwardRef, useEffect, RefObject } from 'react';
import { useIsMounted } from '@rkta/hooks';
import { useLockBodyScroll } from 'react-use';

import { useProviderContext } from '../Provider';
import { Props } from './Backdrop.type';
import { isTargetEvent } from '../util';

export const Backdrop = forwardRef<HTMLElement, Props>(
  ({ onClick, opacity, visible, children, onFadeOut, ...rest }: Props, ref): JSX.Element => {
    const isMounted = useIsMounted();
    const { applyStyles } = useProviderContext();
    const [nodeProps, Element] = applyStyles(
      { fadeIn: visible, fadeOut: !visible, onClick, opacity, ...rest },
      'Backdrop',
    );
    function handleClick(event: Event): void {
      if (onClick && visible && isTargetEvent(event)) onClick();
    }
    function handleKey(event: KeyboardEvent): void {
      if (event.key === 'Escape' && visible && onClick) onClick();
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
    useLockBodyScroll(visible);
    return (
      <Element {...nodeProps} ref={ref} role={onClick ? 'button' : 'dialog'} tabIndex={0}>
        {children}
      </Element>
    );
  },
);

Backdrop.defaultProps = {
  opacity: 0.72,
};
