import { useEffect, useState, Dispatch, SetStateAction } from 'react';

const eventName = 'REACTIVE_STATE_UPDATE';
let store = {};

function replaceStore<N>(nextStore: N): void {
  store = nextStore;
  const event = document.createEvent('Event');
  event.initEvent(eventName, true, true);
  window.dispatchEvent(event);
}

export const useReactiveState = <S>(initialState: S): [S, Dispatch<SetStateAction<S>>] => {
  const [, replaceLocalState] = useState<number>();
  function setState<A>(action: A): void {
    const payload = typeof action === 'function' ? action(store) : { ...action };
    replaceStore({ ...store, ...payload });
  }
  function listener({ timeStamp }: Event): void {
    replaceLocalState(timeStamp);
  }
  useEffect(() => {
    window.addEventListener(eventName, listener);
    replaceStore({ ...initialState, ...store });
    return (): void => {
      window.removeEventListener(eventName, listener);
    };
  }, [0]);
  return [{ ...initialState, ...store }, setState];
};
