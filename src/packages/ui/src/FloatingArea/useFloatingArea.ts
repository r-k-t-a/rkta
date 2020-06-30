import { RefObject, useEffect, useState } from 'react';
import useClickAway from 'react-use/lib/useClickAway';
import { getElement } from '@rkta/hooks';

export const ACTIVE = Symbol('ACTIVE');
export const EXITING = Symbol('EXITING');
export const HIDDEN = Symbol('HIDDEN');

type FloatingAreaConfig = {
  active: boolean;
  consumer: RefObject<HTMLElement>;
  onHide: () => void;
};

export function useFloatingArea({ active, consumer, onHide }: FloatingAreaConfig): symbol {
  const [state, setState] = useState<symbol>(HIDDEN);
  const consumerElement = getElement(consumer);

  function handleEscape(event: KeyboardEvent): void {
    if (active && event.key === 'Escape') {
      event.stopImmediatePropagation();
      onHide();
    }
  }

  function handleExit(): void {
    if (state === EXITING) setState(HIDDEN);
  }

  function effect(): () => void {
    if (consumerElement) consumerElement.addEventListener('animationend', handleExit, false);
    document.addEventListener('keydown', handleEscape, false);
    if (active && state === HIDDEN) setState(ACTIVE);
    if (!active && state === ACTIVE) setState(EXITING);
    return (): void => {
      if (consumerElement) consumerElement.removeEventListener('animationend', handleExit);
      document.removeEventListener('keydown', handleEscape);
    };
  }

  function handleClickAway(event: MouseEvent): void {
    if (onHide && consumerElement && !consumerElement.contains(event.target as Element)) onHide();
  }

  useEffect(effect, [active, consumerElement, state]);
  useClickAway(consumer, handleClickAway);

  return state;
}
