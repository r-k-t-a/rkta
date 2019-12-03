import { useEffect, useState } from 'react';
import { useUnmount } from '@rkta/hooks';
import { useProviderContext } from '../Provider';

interface ReactiveState {
  modalQueue: symbol[];
}

interface Result {
  close(): void;
  isClosing: boolean;
  onClose(): void;
  shouldRender: boolean;
}

export const useModal = (visible: boolean, emitClose?: Function): Result => {
  const [symbol] = useState(Symbol(''));
  const { addModal, removeModal, modal } = useProviderContext();
  const shouldRender = modal === symbol;
  const [isClosing, setIsClosing] = useState(false);
  function close(): void {
    setIsClosing(true);
  }
  function switchOn(): void {
    setIsClosing(false);
    addModal(symbol);
  }
  function switchOff(): void {
    removeModal(symbol);
  }
  function handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape') close();
  }
  function onClose(): void {
    if (isClosing) {
      setIsClosing(false);
      removeModal(symbol);
      if (typeof emitClose === 'function') emitClose();
    }
  }
  function effect(): () => void {
    if (visible && !shouldRender) switchOn();
    if (!visible && shouldRender) switchOff();
    window.addEventListener('keydown', handleKeyDown, true);
    return (): void => window.removeEventListener('keydown', handleKeyDown);
  }
  useEffect(effect, [visible, shouldRender]);
  useUnmount(switchOff);
  return { close, isClosing, onClose, shouldRender };
};
