// import IntersectionObserver from 'intersection-observer';
import { useEffect, useState } from 'react';

export function useIntersectionObserver(
  ref: Element | null,
  options?: IntersectionObserverInit,
): number {
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
