import { useReducer } from 'react';

import { Value } from './Input.type';

interface State {
  hasFocus?: boolean;
  suggestIsLocked?: boolean;
  value?: Value;
}

interface Action {
  type: symbol;
  value?: Value;
}

interface Results {
  hasFocus?: boolean;
  lockSuggest: () => void;
  ownValue?: Value;
  removeFocus: () => void;
  setFocus: () => void;
  setOwnValue: (value: Value) => void;
  suggestIsVisible: boolean;
  unlockSuggest: () => void;
}

const FOCUS_ON = Symbol('FOCUS_ON');
const FOCUS_OFF = Symbol('FOCUS_OFF');
const LOCK_SUGGEST_ON = Symbol('LOCK_SUGGEST_ON');
const LOCK_SUGGEST_OFF = Symbol('LOCK_SUGGEST_OFF');
const SET_VALUE = Symbol('SET_VALUE');

function reducer(state: State, { type, value }: Action): State {
  switch (type) {
    case FOCUS_ON:
      return { ...state, hasFocus: true };
    case FOCUS_OFF:
      return { ...state, hasFocus: false };
    case LOCK_SUGGEST_ON:
      return { ...state, suggestIsLocked: true };
    case LOCK_SUGGEST_OFF:
      return { ...state, suggestIsLocked: false };
    case SET_VALUE:
      return { ...state, value };
    default:
      return state;
  }
}

export function useInput(initialValue?: Value): Results {
  const [state, dispatch] = useReducer(reducer, { value: initialValue });

  const lockSuggest = (): void => dispatch({ type: LOCK_SUGGEST_ON });
  const setFocus = (): void => dispatch({ type: FOCUS_ON });
  const removeFocus = (): void => dispatch({ type: FOCUS_OFF });
  const setOwnValue = (value?: Value): void => dispatch({ type: SET_VALUE, value });
  const unlockSuggest = (): void => dispatch({ type: LOCK_SUGGEST_OFF });

  return {
    hasFocus: state.hasFocus,
    lockSuggest,
    ownValue: state.value,
    removeFocus,
    setFocus,
    setOwnValue,
    suggestIsVisible: state.suggestIsLocked || state.hasFocus || false,
    unlockSuggest,
  };
}
