import { useState, useEffect } from 'react';
import upperFirst from 'lodash/upperFirst';
import useProviderContext from '../Provider/useProviderContext';
import { CssRkta } from '../Provider/theme/theme.defs';

interface Handlers {
  onPopUp?: Function;
  onPopUpBegin?: Function;
  onFadeDown?: Function;
  onFadeDownBegin?: Function;
  [key: string]: Function | undefined;
}

function emitEvent(emit: Function | undefined): void {
  if (typeof emit === 'function') emit();
}

export default (initialFx: string, handlers: Handlers = {}): ({} | Function)[] => {
  const {
    theme: { Fx },
  } = useProviderContext();
  const [fx, setFx] = useState('initialStyle');
  const [isMounted, setIsMounted] = useState(false);
  const css: CssRkta = Fx[fx];
  function emitBegin(transition: string): void {
    emitEvent(handlers[`on${upperFirst(transition)}Begin`]);
  }
  function setEffect(effect: string): void {
    setFx(effect);
    emitBegin(effect);
  }
  const onAnimationEnd = (): void => {
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
