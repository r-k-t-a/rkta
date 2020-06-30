import { RefObject, useEffect, useState } from 'react';
import useClickAway from 'react-use/lib/useClickAway';
import { getElement } from '@rkta/hooks';

export const ACTIVE = Symbol('ACTIVE');
export const EXITING = Symbol('EXITING');
export const HIDDEN = Symbol('HIDDEN');

type FloatingAreaConfig = {
  active: boolean;
  consumer: RefObject<HTMLElement>;
  hasStyles: boolean;
  onHide: () => void;
};

export type State = {
  phase: symbol;
  transition: boolean;
};

export function useFloatingArea({
  active,
  consumer,
  hasStyles,
  onHide,
}: FloatingAreaConfig): State {
  const [state, setState] = useState<State>({ phase: HIDDEN, transition: false });
  const patchState = (patch: Partial<State>) =>
    setState((prevState) => ({ ...prevState, ...patch }));
  const consumerElement = getElement(consumer);

  function handleEscape(event: KeyboardEvent): void {
    if (active && event.key === 'Escape') {
      event.stopImmediatePropagation();
      onHide();
    }
  }

  function handleExit(): void {
    if (state.phase === EXITING) patchState({ phase: HIDDEN });
  }

  function effect(): () => void {
    if (consumerElement) consumerElement.addEventListener('animationend', handleExit, false);
    document.addEventListener('keydown', handleEscape, false);
    if (hasStyles && state.phase === ACTIVE && !state.transition) patchState({ transition: true });
    if (state.phase === HIDDEN && state.transition) patchState({ transition: false });
    if (active && state.phase === HIDDEN) patchState({ phase: ACTIVE });
    if (!active && state.phase === ACTIVE) patchState({ phase: EXITING });
    return (): void => {
      if (consumerElement) consumerElement.removeEventListener('animationend', handleExit);
      document.removeEventListener('keydown', handleEscape);
    };
  }

  function handleClickAway(event: MouseEvent): void {
    if (onHide && consumerElement && !consumerElement.contains(event.target as Element)) onHide();
  }

  useEffect(effect, [active, consumerElement, state.phase, state.transition, hasStyles]);
  useClickAway(consumer, handleClickAway);

  return state;
}
