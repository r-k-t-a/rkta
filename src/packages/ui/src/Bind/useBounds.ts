import { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';

export function useBounds(element: Element): DOMRect {
  const [state, setState] = useState<DOMRect>(element.getBoundingClientRect());

  function updateBounds(): void {
    const bounds = element?.getBoundingClientRect();
    const prevValues = Object.values(state);
    const nextValues = Object.values(bounds);
    if (prevValues !== nextValues) setState(bounds);
  }

  const debouncedUpdateBounds = debounce(updateBounds, 32);

  function effect(): () => void {
    const interval = setInterval(updateBounds, 1024);
    window.addEventListener('scroll', debouncedUpdateBounds);
    window.addEventListener('resize', debouncedUpdateBounds);
    updateBounds();
    return (): void => {
      clearInterval(interval);
      window.removeEventListener('scroll', debouncedUpdateBounds);
      window.removeEventListener('resize', debouncedUpdateBounds);
    };
  }
  useEffect(effect, [element]);

  return state;
}
