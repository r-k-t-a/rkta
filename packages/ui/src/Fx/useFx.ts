import { AnimationEvent, useState, useEffect } from 'react';
import upperFirst from 'lodash/upperFirst';

import { useProviderContext } from '../Provider';
import { CssEmotion } from '../Provider/theme/theme.type';
import { isTargetEvent } from '../util';

interface Handlers {
  onPopUp?: Function;
  onPopUpBegin?: Function;
  onFadeDown?: Function;
  onFadeDownBegin?: Function;
  [key: string]: Function | undefined;
}

interface FX {
  css: CssEmotion;
  onAnimationEnd: Function;
}

function emitEvent(emit: Function | undefined): void {
  if (typeof emit === 'function') emit();
}

export const useFx = (initialFx: string, handlers: Handlers = {}): [FX, Function] => {
  const {
    theme: { Fx },
  } = useProviderContext();
  const [fx, setFx] = useState('initialStyle');
  const [isMounted, setIsMounted] = useState(false);
  const css: CssEmotion = Fx[fx] as CssEmotion;
  function emitBegin(transition: string): void {
    emitEvent(handlers[`on${upperFirst(transition)}Begin`]);
  }
  function setEffect(effect: string): void {
    setFx(effect);
    emitBegin(effect);
  }
  const onAnimationEnd = (event: AnimationEvent): void => {
    if (isTargetEvent(event)) emitEvent(handlers[`on${upperFirst(fx)}`]);
  };
  useEffect((): void => {
    if (isMounted) return;
    setIsMounted(true);
    emitBegin(fx);
    setFx(initialFx);
  });
  return [{ css, onAnimationEnd }, setEffect];
};
