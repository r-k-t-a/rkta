import { useEffect, useState } from 'react';

// #region types
export type State = {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
};

export type Args = {
  onMove?: (arg0: Offset) => void;
  onMoved?: (arg0: Offset) => void;
  producer?: HTMLElement | null | undefined;
};

export type Offset = {
  x: number;
  y: number;
};

export type Result = Offset & {
  moved: boolean;
};

export type Coords = {
  screenX: number;
  screenY: number;
};
// #endregion

const defaultState: State = {
  startX: 0,
  startY: 0,
  endX: 0,
  endY: 0,
};

function coords(event: TouchEvent): Coords {
  const { screenX, screenY } = event.touches[0];
  return { screenX, screenY };
}

function moved({ endX, endY }: Pick<State, 'endX' | 'endY'>): boolean {
  return endX !== defaultState.endX || endY !== defaultState.endY;
}

function offset({ startX, startY, endX, endY }: State): Offset {
  if (!moved({ endX, endY })) return { x: 0, y: 0 };
  return { x: endX - startX, y: endY - startY };
}

const start = ({ screenX, screenY }: Coords) => ({ startX: screenX, startY: screenY });
const end = ({ screenX, screenY }: Coords) => ({ endX: screenX, endY: screenY });

const makeState = () => {
  const state: State = { ...defaultState };
  return (nextState?: Partial<State>): State => {
    if (nextState) return Object.assign(state, nextState);
    return state;
  };
};

const state = makeState();

export function useTouchMove({ onMove, onMoved, producer }: Args): boolean {
  const [isActive, setIsActive] = useState(false);

  function handleStart(event: TouchEvent): void {
    setIsActive(true);
    const nextCoords = coords(event);
    const nextState = start(nextCoords);
    state(nextState);
  }

  function handleMove(event: TouchEvent): void {
    const nextCoords = coords(event);
    const nextState = end(nextCoords);
    const lastState = state(nextState);
    if (onMove) {
      const movedBy = offset(lastState);
      onMove(movedBy);
    }
  }

  function handleEnd(): void {
    const lastState = state();
    const event = offset(lastState);
    if (onMoved && moved(lastState)) onMoved(event);
    setIsActive(false);
    state(defaultState);
  }

  useEffect(() => {
    producer?.addEventListener('touchstart', handleStart);
    producer?.addEventListener('touchmove', handleMove);
    producer?.addEventListener('touchcancel', handleEnd);
    producer?.addEventListener('touchend', handleEnd);

    return () => {
      producer?.removeEventListener('touchstart', handleStart);
      producer?.removeEventListener('touchmove', handleMove);
      producer?.removeEventListener('touchcancel', handleEnd);
      producer?.removeEventListener('touchend', handleEnd);
    };
  }, [producer, onMove, onMoved]);

  return isActive;
}
