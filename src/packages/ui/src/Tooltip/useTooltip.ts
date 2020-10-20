import { useReducer, MouseEvent } from 'react';

const HIDE = Symbol('HIDE');
const SHOW = Symbol('SHOW');

type Target = MouseEvent['nativeEvent']['target'];

type State = {
  isVisible: boolean;
  producer?: Target;
};

type Action = {
  type: symbol;
  producer?: Target;
};

type UseTooltip = State & {
  hide(): void;
  show(event: MouseEvent): void;
};

const defaultState = {
  isVisible: false,
};

function reducer(state: State, { type, producer }: Action): State {
  switch (type) {
    case HIDE:
      return { ...state, isVisible: false };
    case SHOW:
      return { ...state, isVisible: true, producer };
    default:
      return state;
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useTooltip(): UseTooltip {
  const [state, dispatch] = useReducer(reducer, defaultState);
  return {
    ...state,
    hide(): void {
      dispatch({ type: HIDE });
    },
    show(event: MouseEvent): void {
      dispatch({ type: SHOW, producer: event.nativeEvent.target });
    },
  };
}
