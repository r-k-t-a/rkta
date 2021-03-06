// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isElement(element: HTMLElement | Element | any): boolean {
  if (typeof window === 'undefined') return false;
  return element instanceof Element || element instanceof HTMLElement;
}
