import { useReducer, MouseEvent } from 'react';

const HIDE = Symbol('HIDE');
const TOGGLE = Symbol('TOGGLE');
const SET_TRIGGER_ELEMENT = Symbol('SET_TRIGGER_ELEMENT');

type Target = MouseEvent['nativeEvent']['target'];

type State = {
  isVisible: boolean;
  producer?: Target;
};

type Action = {
  type: symbol;
  producer?: Target;
};

type UsePopover = State & {
  hide(): void;
  setProducer(producer: Target): void;
  toggle(): void;
};

const defaultState = {
  isVisible: false,
};

function reducer(state: State, { type, producer }: Action): State {
  switch (type) {
    case HIDE:
      return { ...state, isVisible: false };
    case TOGGLE:
      return { ...state, isVisible: !state.isVisible };
    case SET_TRIGGER_ELEMENT:
      return { ...state, producer };
    default:
      return state;
  }
}

export function usePopover(): UsePopover {
  const [state, dispatch] = useReducer(reducer, defaultState);
  return {
    ...state,
    hide() {
      dispatch({ type: HIDE });
    },
    setProducer(producer) {
      dispatch({ type: SET_TRIGGER_ELEMENT, producer });
    },
    toggle() {
      dispatch({ type: TOGGLE });
    },
  };
}
