import { useEffect, useState } from 'react';
import { useUnmount } from '@rkta/hooks';
import { useProviderContext } from '../Provider';

type ReactiveState = {
  modalQueue: symbol[];
};
type Result = {
  backdropIsVisible: boolean;
  onBackdropFade(): void;
  shouldRender: boolean;
};

const CLOSED = 0;
const CLOSING = 1;
const OPEN = 2;

export const useModal = (visible: boolean): Result => {
  const [symbol] = useState(Symbol(''));
  const { addModal, removeModal, modal } = useProviderContext();
  const shouldRender = modal === symbol;
  const [state, setState] = useState(visible ? OPEN : CLOSED);
  function close(): void {
    setState(CLOSING);
  }
  function push(): void {
    setState(OPEN);
    addModal(symbol);
  }
  const pop = (): void => removeModal(symbol);
  function onBackdropFade(): void {
    setState(CLOSED);
    pop();
  }
  function effect(): void {
    if (visible && !shouldRender) push();
    if (!visible && shouldRender) close();
  }
  useEffect(effect, [shouldRender, visible]);
  useUnmount(pop);
  return { backdropIsVisible: state === OPEN, onBackdropFade, shouldRender };
};
