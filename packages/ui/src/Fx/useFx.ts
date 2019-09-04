import { useState } from 'react';
import startCase from 'lodash/startCase';
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

export default (initialQueue: string[], handlers: Handlers): ({} | Function)[] => {
  const [queue, setQueue] = useState(initialQueue);
  console.log('queue', queue);

  const {
    theme: { Fx },
  } = useProviderContext();
  const [activeTransition, ...restTransitions] = queue;
  const css: CssRkta = activeTransition ? Fx[activeTransition] : [];
  const addEffect = (effect: string): void => {
    console.log('addEffect', effect);

    setQueue([...queue, effect]);
  };
  const onAnimationEnd = (): void => {
    setQueue(restTransitions);
    const [nextTransition] = restTransitions;
    console.log('onAnimationEnd', activeTransition, '->', nextTransition);
    emitEvent(handlers[`on${startCase(activeTransition)}`]);
    emitEvent(handlers[`on${startCase(nextTransition)}Begin`]);
  };
  return [{ css, onAnimationEnd }, addEffect];
};
