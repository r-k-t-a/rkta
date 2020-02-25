import { useEffect, useReducer } from 'react';
import debounce from 'lodash/debounce';

interface State {
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
  isVisible: false,
};

const HIDE = Symbol('HIDE');
const SET_TRIGGER_ELEMENT = Symbol('SET_TRIGGER_ELEMENT');
const SHOW = Symbol('SHOW');
const UPDATE_BOUNDS = Symbol('UPDATE_BOUNDS');

function reducer(state: State, { type, triggerBounds, triggerElement }: Action): State {
  switch (type) {
    case HIDE:
      return { ...state, isVisible: false };
    case SET_TRIGGER_ELEMENT:
      return { ...state, triggerBounds: triggerElement.getBoundingClientRect(), triggerElement };
    case SHOW:
      return { ...state, isVisible: true };
    case UPDATE_BOUNDS:
      return { ...state, triggerBounds };
    default:
      return state;
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function useFsm() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  function updateBounds(): void {
    const triggerBounds = state.triggerElement?.getBoundingClientRect();
    const prevValues = Object.values(state?.triggerBounds || {});
    const nextValues = Object.values(triggerBounds || {});
    if (prevValues !== nextValues) dispatch({ type: UPDATE_BOUNDS, triggerBounds });
  }
  const debouncedUpdateBounds = debounce(updateBounds, 32);
  function effect(): () => void {
    const interval = setInterval(updateBounds, 320);
    window.addEventListener('scroll', debouncedUpdateBounds);
    window.addEventListener('resize', debouncedUpdateBounds);
    return (): void => {
      clearInterval(interval);
      window.removeEventListener('scroll', debouncedUpdateBounds);
      window.removeEventListener('resize', debouncedUpdateBounds);
    };
  }
  useEffect(effect, [state.isVisible]);
  return {
    ...state,
    hide(): void {
      dispatch({ type: HIDE });
    },
    setTriggerElement(triggerElement: Element): void {
      dispatch({ type: SET_TRIGGER_ELEMENT, triggerElement });
    },
    show(): void {
      if (!state.isVisible) dispatch({ type: SHOW });
    },
  };
}
