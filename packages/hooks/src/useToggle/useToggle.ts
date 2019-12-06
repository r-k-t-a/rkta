import { useState } from 'react';

export function useToggle(initialState?: boolean): [boolean, () => void] {
  const [state, setIsOn] = useState(initialState || false);
  const toggle = (): void => setIsOn(lastState => !lastState);
  return [state, toggle];
}
