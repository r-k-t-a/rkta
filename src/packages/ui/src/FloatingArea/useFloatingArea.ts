import { RefObject, useEffect, useState } from 'react';
import useClickAway from 'react-use/lib/useClickAway';
import { getHTMLElementFromRef } from '@rkta/hooks';

import { FloatingAreaProps } from './FloatingArea.type';

import { FloatingAreaProps } from './FloatingArea.type';

export const ENTER = Symbol('ENTER');
export const EXIT = Symbol('EXIT');
export const OUT = Symbol('OUT');
export const READY = Symbol('READY');

type FloatingAreaConfig = {
  active: boolean;
  consumer: RefObject<HTMLElement>;
  producer: FloatingAreaProps['producer'];
  onHide?: () => void;
};

export function useFloatingArea({
  active,
  consumer,
  onHide,
  producer,
}: FloatingAreaConfig): [symbol, () => void] {
  const [state, setState] = useState<symbol>(OUT);
  const consumerElement = getHTMLElementFromRef(consumer);
  const producerElement = getHTMLElementFromRef(producer);

  function handleEscape(event: KeyboardEvent): void {
    if (active && onHide && event.key === 'Escape') {
      event.stopImmediatePropagation();
      onHide();
    }
  }

  function handleAnimationEnd(): void {
    if (state === EXIT) setState(OUT);
    if (state === ENTER) setState(READY);
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
    const shouldHide = producerElement
      ? !producerElement.contains(event.target as HTMLElement)
      : true;
    if (onHide && shouldHide) onHide();
  }

  useEffect(effect, [active, consumerElement, producerElement, state]);
  useClickAway(consumer, handleClickAway);

  return [state, handleAnimationEnd];
}
