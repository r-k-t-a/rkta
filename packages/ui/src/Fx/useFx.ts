import { useState } from 'react';
import startCase from 'lodash/startCase';
import useProviderContext from '../Provider/useProviderContext';
import { CssRkta } from '../Provider/theme/theme.defs';

interface Handlers {
  [key: string]: Function;
}

export default (initialQueue: string[], handlers: Handlers): {} => {
  const [queue, setQueue] = useState(initialQueue);
  const {
    theme: { Fx },
  } = useProviderContext();
  const [activeTransition, ...restTransitions] = queue;
  const css: CssRkta = activeTransition ? Fx[activeTransition] : [];
  const onAnimationEnd = (): void => {
    setQueue(restTransitions);
    const [nextTransition] = restTransitions;
    const emitEnd = handlers[`on${startCase(activeTransition)}`];
    const emitBegin = nextTransition && handlers[`on${startCase(nextTransition)}Begin`];
    if (typeof emitEnd === 'function') emitEnd();
    if (typeof emitBegin === 'function') emitBegin();
  };
  const addEffect = (effect: string): void => setQueue([...queue, effect]);
  return [{ css, onAnimationEnd }, addEffect];
};
