import { useReducer } from 'react';

const HIDE = Symbol('HIDE');
const TOGGLE = Symbol('TOGGLE');
const SET_TRIGGER_ELEMENT = Symbol('SET_TRIGGER_ELEMENT');

interface State {
  isVisible: boolean;
  triggerElement?: Element;
}
interface Action {
  type: symbol;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const defaultState = {
  isVisible: false,
};

function reducer(state: State, { type, triggerElement }: Action): State {
  switch (type) {
    case HIDE:
      return { ...state, isVisible: false };
    case TOGGLE:
      return { ...state, isVisible: !state.isVisible };
    case SET_TRIGGER_ELEMENT:
      return { ...state, triggerElement };
    default:
      return state;
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function usePopover() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  return {
    ...state,
    hide(): void {
      dispatch({ type: HIDE });
    },
    setTriggerElement(triggerElement: Element): void {
      dispatch({ type: SET_TRIGGER_ELEMENT, triggerElement });
    },
    toggle(): void {
      dispatch({ type: TOGGLE });
    },
  };
}
