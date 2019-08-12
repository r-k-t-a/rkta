import {
  FocusEvent,
  ButtonHTMLAttributes,
  MouseEvent,
  PointerEvent,
  TouchEvent,
  useEffect,
  useState,
} from 'react';

import { AddWaveInput, RippleProps, UseRippliState, WaveInterface } from './Ripple.d';

const initialState: UseRippliState = {
  focus: false,
  mouseover: false,
  overlayIsVisible: false,
  patched: 0,
  waves: [],
  touch: false,
};

function fire(event: {}, handle?: Function): void {
  if (typeof handle === 'function') handle(event);
}

const releaseWave = (wave: WaveInterface): WaveInterface => ({ ...wave, released: true });
function releaseWaves(state: UseRippliState, patchState: Function): void {
  const waves = state.waves.map(releaseWave);
  patchState({ ...state, waves });
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
  const wave: WaveInterface = { id, x, y, size, released: false };
  patchState({ ...state, waves: [...state.waves.map(releaseWave), wave] });
}

export default ({
  onBlur,
  onFocus,
  onMouseOver,
  onMouseOut,
  onPointerDown,
  onContextMenu,
  onTouchStart,
}: ButtonHTMLAttributes<{}>): [RippleProps, {}] => {
  const [state, setState] = useState(initialState);
  function patchState(payload: {}): void {
    setState({ ...state, ...payload, patched: Date.now() });
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
      releaseWaves({ ...state, focus: false, mouseover: false }, patchState);
      fire(event, onBlur);
    },
    onClick: (event: MouseEvent<HTMLElement>): void => {
      releaseWaves(state, patchState);
      fire(event, onFocus);
    },
    onContextMenu: (event: TouchEvent): void => {
      releaseWaves(state, patchState);
      fire(event, onContextMenu);
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
      fire(event, onFocus);
    },
    onMouseOver: (event: MouseEvent): void => {
      patchState({ mouseover: true, overlayIsVisible: !state.touch });
      fire(event, onMouseOver);
    },
    onMouseOut: (event: MouseEvent): void => {
      patchState({ mouseover: false });
      fire(event, onMouseOut);
    },
    onPointerDown: (event: PointerEvent): void => {
      const { clientY, clientX } = event;
      const node = event.target as HTMLElement;
      const { top, left, width, height } = node.getBoundingClientRect();
      const pointX = clientX - left;
      const pointY = clientY - top;
      addWave({ pointX, pointY, width, height }, { ...state, focus: true }, patchState);
      fire(event, onPointerDown);
    },
    onTouchStart: (event: TouchEvent): void => {
      patchState({ touch: true });
      fire(event, onTouchStart);
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
