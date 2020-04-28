import { useState, useEffect } from 'react';
import upperFirst from 'lodash/upperFirst';
import { Interpolation } from '@emotion/core';

import { useProviderContext } from '../Provider';
import { RktaComponentStyles } from '../Provider/theme';

interface Handlers {
  onPopUp?: Function;
  onPopUpBegin?: Function;
  onFadeDown?: Function;
  onFadeDownBegin?: Function;
  [key: string]: Function | undefined;
}

interface FX {
  css: Interpolation;
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
  const css: Interpolation = (Fx as RktaComponentStyles)[fx] as Interpolation;
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
