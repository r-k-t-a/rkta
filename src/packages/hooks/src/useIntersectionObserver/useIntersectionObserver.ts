import 'intersection-observer';
import { useEffect, useState } from 'react';

export function useIntersectionObserver(ref: Element, options?: IntersectionObserverInit): number {
  const [mounted, setMounted] = useState(false);
  const [state, setState] = useState<number>(0);

  function handleIntersect(entries: IntersectionObserverEntry[]): void {
    const { intersectionRatio } = entries[0];
    if (intersectionRatio !== state) setState(intersectionRatio);
  }

  function effect(): () => void {
    if (!mounted) setMounted(true);
    const observer = new IntersectionObserver(handleIntersect, options);
    if (ref) observer.observe(ref);
    return (): void => {
      if (ref) observer.unobserve(ref);
    };
  }

  useEffect(effect, [mounted, ref, state]);
  return state;
}
