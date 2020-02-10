import { FocusEvent, HTMLAttributes, MouseEvent, TouchEvent, useEffect, useState } from 'react';

import { Props, Wave } from './Ripple.type';
import { reEmit } from '../../util/reEmit';

interface AddWaveInput {
  width: number;
  height: number;
  pointX: number;
  pointY: number;
}

interface UseRippliState {
  focus: boolean;
  mouseover: boolean;
  overlayIsVisible: boolean;
  patched: number;
  touch: boolean;
  waves: Wave[];
}

const initialState: UseRippliState = {
  focus: false,
  mouseover: false,
  overlayIsVisible: false,
  patched: 0,
  waves: [],
  touch: false,
};

const releaseWave = (wave: Wave): Wave => ({ ...wave, released: true });
function releaseWaves(state: UseRippliState, patchState: Function): void {
  const waves = state.waves.map(releaseWave);
  patchState({ ...state, focus: false, mouseover: false, waves });
}

function addWave(
  { width, height, pointX, pointY }: AddWaveInput,
  state: UseRippliState,
  patchState: Function,
): void {
  const size = Math.max(width, height);
  const x = pointX;
  const y = pointY;
  const id = Date.now();
  const wave: Wave = { id, x, y, size, released: false };
  patchState({ ...state, waves: [...state.waves.map(releaseWave), wave] });
}

export const useRipple = ({
  onBlur,
  onClick,
  onFocus,
  onMouseOver,
  onMouseOut,
  onMouseDown,
  onContextMenu,
  onTouchCancel,
  onTouchEnd,
  onTouchStart,
}: HTMLAttributes<HTMLElement>): [Props, {}] => {
  const [state, setState] = useState(initialState);
  function patchState(payload: {}): void {
    setState(prevState => ({ ...prevState, ...payload, patched: Date.now() }));
  }
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  useEffect(() => {
    function handlePointerUp(): void {
      releaseWaves(state, patchState);
    }
    window.addEventListener('pointerup', handlePointerUp);
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    return () => {
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [state.patched]);
  const buttonProps = {
    onBlur: (event: FocusEvent): void => {
      releaseWaves({ ...state }, patchState);
      reEmit(event, onBlur);
    },
    onClick: (event: MouseEvent<HTMLElement>): void => {
      releaseWaves(state, patchState);
      reEmit(event, onClick);
    },
    onContextMenu: (event: TouchEvent): void => {
      releaseWaves(state, patchState);
      reEmit(event, onContextMenu);
    },
    onFocus: (event: FocusEvent): void => {
      if (!state.focus) {
        const node = event.target as HTMLElement;
        const { clientWidth: width, clientHeight: height } = node;
        const pointX = width / 2;
        const pointY = height / 2;
        addWave(
          { pointX, pointY, width, height },
          { ...state, focus: true, mouseover: true },
          patchState,
        );
      }
      reEmit(event, onFocus);
    },
    onMouseOver: (event: MouseEvent): void => {
      patchState({ mouseover: true, overlayIsVisible: !state.touch });
      reEmit(event, onMouseOver);
    },
    onMouseOut: (event: MouseEvent): void => {
      patchState({ mouseover: false });
      reEmit(event, onMouseOut);
    },
    onMouseDown: (event: MouseEvent): void => {
      const { clientY, clientX } = event;
      const node = event.target as HTMLElement;
      const { top, left, width, height } = node.getBoundingClientRect();
      const pointX = clientX - left;
      const pointY = clientY - top;
      addWave({ pointX, pointY, width, height }, { ...state, focus: true }, patchState);
      reEmit(event, onMouseDown);
    },
    onTouchCancel: (event: TouchEvent): void => {
      patchState({ mouseover: false, overlayIsVisible: false });
      reEmit(event, onTouchCancel);
    },
    onTouchEnd: (event: TouchEvent): void => {
      patchState({ mouseover: false, overlayIsVisible: false });
      reEmit(event, onTouchEnd);
    },
    onTouchStart: (event: TouchEvent): void => {
      patchState({ mouseover: true, overlayIsVisible: true });
      reEmit(event, onTouchStart);
    },
  };
  function onOverlayAnimationEnd(): void {
    if (!state.mouseover) patchState({ overlayIsVisible: false });
  }
  function onWaveDissolve(): void {
    const [, ...waves] = state.waves;
    patchState({ waves });
  }
  const { mouseover, overlayIsVisible, waves } = state;
  const rippeProps = {
    mouseover,
    overlayIsVisible,
    waves,
    onOverlayAnimationEnd,
    onWaveDissolve,
  };
  return [rippeProps, buttonProps];
};
