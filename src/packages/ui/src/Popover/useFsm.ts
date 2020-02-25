import { useReducer } from 'react';

export const FX_ENTER = 'in';
export const FX_LEAVE = 'out';

const EXIT = Symbol('EXIT');
const HIDE = Symbol('HIDE');
const SET_TRIGGER_ELEMENT = Symbol('SET_TRIGGER_ELEMENT');
const SHOW = Symbol('SHOW');

interface State {
  fx: string;
  isVisible: boolean;
  triggerBounds?: DOMRect;
  triggerElement?: Element;
}
interface Action {
  type: symbol;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const defaultState = {
  fx: FX_ENTER,
  isVisible: false,
};

function reducer(state: State, { type, triggerElement }: Action): State {
  switch (type) {
    case EXIT:
      return { ...state, isVisible: false, fx: FX_ENTER };
    case HIDE:
      return { ...state, fx: FX_LEAVE };
    case SET_TRIGGER_ELEMENT:
      return { ...state, triggerElement };
    case SHOW:
      return { ...state, isVisible: true };
    default:
      return state;
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function useFsm() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  return {
    ...state,
    handleAnimationEnd(): void {
      if (state.fx === FX_LEAVE) dispatch({ type: EXIT });
    },
    hide(): void {
      if (state.isVisible) dispatch({ type: HIDE });
    },
    setTriggerElement(triggerElement: Element): void {
      dispatch({ type: SET_TRIGGER_ELEMENT, triggerElement });
    },
    show(): void {
      if (!state.isVisible) dispatch({ type: SHOW });
    },
  };
}
