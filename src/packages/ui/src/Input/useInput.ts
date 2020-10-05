import { useState } from 'react';

import { Value } from '../InputBase/InputBase.type';

type State = {
  hasFocus?: boolean;
  inputElement?: Element;
  suggestIsLocked?: boolean;
  localValue?: Value;
};

type Results = State & {
  lockSuggest(): void;
  removeFocus(): void;
  setFocus(inputElement: Element): void;
  setLocalValue(value: Value): void;
  suggestIsVisible: boolean;
  unlockSuggest(): void;
};

export function useInput(initialValue?: Value): Results {
  const [state, setState] = useState<State>({ localValue: initialValue });
  const patchState = (payload: Partial<State>): void =>
    setState((prevState) => ({ ...prevState, ...payload }));

  return {
    ...state,
    lockSuggest: (): void => patchState({ suggestIsLocked: true }),
    removeFocus: (): void => patchState({ hasFocus: false }),
    setFocus: (inputElement: Element): void => patchState({ hasFocus: true, inputElement }),
    setLocalValue: (localValue?: Value): void => patchState({ localValue }),
    suggestIsVisible: state.suggestIsLocked || state.hasFocus || false,
    unlockSuggest: (): void => patchState({ hasFocus: false, suggestIsLocked: false }),
  };
}
