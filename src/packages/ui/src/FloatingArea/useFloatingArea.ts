import { RefObject, useEffect, useState } from 'react';
import useClickAway from 'react-use/lib/useClickAway';
import { getHTMLElementFromRef } from '@rkta/hooks';

import { FloatingAreaProps } from './FloatingArea.type';

export const ENTER = Symbol('ENTER');
export const EXIT = Symbol('EXIT');
export const OUT = Symbol('OUT');
export const READY = Symbol('READY');

export type FloatingAreaConfig = {
  active: boolean;
  consumer: RefObject<HTMLElement>;
  producer: FloatingAreaProps['producer'];
  onClose?: () => void;
  onEscape?: () => void;
  onFxIn?: () => void;
  onFxOut?: () => void;
};

export function useFloatingArea({
  active,
  consumer,
  onClose,
  onEscape,
  onFxIn,
  onFxOut,
  producer,
}: FloatingAreaConfig): [symbol, () => void] {
  const [state, setState] = useState<symbol>(OUT);
  const consumerElement = getHTMLElementFromRef(consumer);
  const producerElement = getHTMLElementFromRef(producer);

  function handleEscape(event: KeyboardEvent): void {
    const hasHandlers = onEscape || onClose;
    if (active && hasHandlers && event.key === 'Escape') {
      event.stopImmediatePropagation();
      if (onEscape) onEscape();
      if (onClose) onClose();
    }
  }

  function handleAnimationEnd(): void {
    if (state === EXIT) {
      setState(OUT);
      if (onFxOut) onFxOut();
    }
    if (state === ENTER) {
      setState(READY);
      if (onFxIn) onFxIn();
    }
  }

  function effect(): () => void {
    document.addEventListener('keydown', handleEscape, false);
    if (active && state === OUT) setState(ENTER);
    if (!active && state === READY) setState(EXIT);
    return (): void => {
      document.removeEventListener('keydown', handleEscape);
    };
  }

  function handleClickAway(event: MouseEvent): void {
    const shouldClose = producerElement
      ? !producerElement.contains(event.target as HTMLElement)
      : true;
    if (onClose && shouldClose) onClose();
  }

  useEffect(effect, [active, consumerElement, producerElement, state]);
  useClickAway(consumer, handleClickAway);

  return [state, handleAnimationEnd];
}
