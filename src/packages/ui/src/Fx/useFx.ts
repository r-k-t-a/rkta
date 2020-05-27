import { useState, useEffect, AnimationEventHandler } from 'react';
import upperFirst from 'lodash/upperFirst';
import { SerializedStyles } from '@emotion/core';

import { useProviderContext } from '../Provider';

type Handler = () => void;
type EffectSetter = (effect: string) => void;

interface Handlers {
  onPopUp?: Handler;
  onPopUpBegin?: Handler;
  onFadeDown?: Handler;
  onFadeDownBegin?: Handler;
  [key: string]: Handler | undefined;
}

interface FX {
  css: SerializedStyles;
  onAnimationEnd: AnimationEventHandler;
}

function emitEvent(emit: Handler | undefined): void {
  if (typeof emit === 'function') emit();
}

export const useFx = (initialFx: string, handlers: Handlers = {}): [FX, EffectSetter] => {
  const {
    theme: { Fx },
  } = useProviderContext();
  const [fx, setFx] = useState('initialStyle');
  const [isMounted, setIsMounted] = useState(false);
  const css: SerializedStyles = Fx[fx] as SerializedStyles;
  function emitBegin(transition: string): void {
    emitEvent(handlers[`on${upperFirst(transition)}Begin`]);
  }
  function setEffect(effect: string): void {
    setFx(effect);
    emitBegin(effect);
  }
  const onAnimationEnd = (): void => {
    // TODO: use isTargetEvent, currently blocked by: https://github.com/facebook/react/issues/17477
    emitEvent(handlers[`on${upperFirst(fx)}`]);
  };
  useEffect((): void => {
    if (isMounted) return;
    setIsMounted(true);
    emitBegin(fx);
    setFx(initialFx);
  });
  return [{ css, onAnimationEnd }, setEffect];
};
