import 'intersection-observer';
import { useEffect, useState } from 'react';

import { useIsMounted } from '../useIsMounted';

export function useIntersectionObserver(ref: Element, options?: IntersectionObserverInit): number {
  useIsMounted();
  const [state, setState] = useState<number>(0);
  function handleIntersect(entries: IntersectionObserverEntry[]): void {
    const { intersectionRatio } = entries[0];
    if (intersectionRatio !== state) setState(intersectionRatio);
  }
  function effect(): () => void {
    const observer = new IntersectionObserver(handleIntersect, options);
    if (ref) observer.observe(ref);
    return (): void => {
      if (ref) observer.unobserve(ref);
    };
  }
  useEffect(effect, [ref, state]);
  return state;
}
