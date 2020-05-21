import { useEffect, useState, useRef, RefObject } from 'react';

export interface Indicator {
  height: number;
  left: number;
  top: number;
  width: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isElement(element: any): boolean {
  if (typeof window === 'undefined') return false;
  return element instanceof Element || element instanceof HTMLElement;
}

export function useIndicator(
  index: number,
  externalRef?: RefObject<HTMLElement>,
): [RefObject<HTMLElement>, Indicator | undefined] {
  const defaultRef = useRef<HTMLElement>(null);
  const [state, setState] = useState<Indicator | undefined>(undefined);
  const ref = externalRef && isElement(externalRef.current) ? externalRef : defaultRef;

  function update(): void {
    const { current } = ref;
    const tabNode = current?.childNodes[index] as HTMLElement;
    if (!tabNode) return;
    const { offsetLeft: left, offsetTop: top, offsetHeight: height, offsetWidth: width } = tabNode;
    if (
      !state ||
      height !== state.height ||
      left !== state.left ||
      top !== state.top ||
      width !== state.width
    )
      setState({ height, left, top, width });
  }

  function effect(): () => void {
    const interval = setInterval(update, 64);
    update();
    return (): void => clearInterval(interval);
  }

  useEffect(effect, [index, ref.current, state?.height, state?.left, state?.top, state?.width]);

  return [ref, state];
}
