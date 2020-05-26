/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function isElement(element: any): boolean {
  if (typeof window === 'undefined') return false;
  return element instanceof Element || element instanceof HTMLElement;
}
