import { useEffect, useState } from 'react';

export function useIsMounted(): boolean {
  const [state, setState] = useState(false);
  function effect(): void {
    if (!state) setState(true);
  }
  useEffect(effect, [state]);
  return state;
}
