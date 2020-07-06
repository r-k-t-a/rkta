import { useReducer } from 'react';

const HIDE = Symbol('HIDE');
const TOGGLE = Symbol('TOGGLE');
const SET_TRIGGER_ELEMENT = Symbol('SET_TRIGGER_ELEMENT');

type State = {
  isVisible: boolean;
  producer?: HTMLElement;
};
type Action = {
  type: symbol;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
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

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function usePopover() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  return {
    ...state,
    hide(): void {
      dispatch({ type: HIDE });
    },
    setProducer(producer: Element): void {
      dispatch({ type: SET_TRIGGER_ELEMENT, producer });
    },
    toggle(): void {
      dispatch({ type: TOGGLE });
    },
  };
}
