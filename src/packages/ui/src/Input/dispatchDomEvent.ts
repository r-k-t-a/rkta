import { Value } from './Input.type';

interface Options {
  bubbles?: boolean;
  cancelable?: boolean;
}

interface CustomEvent extends Event {
  eventName: string;
}

export function dispatchDomEvent(
  element: Element,
  eventName: string,
  value: Value,
  options?: Options,
): void {
  if (document.createEvent) {
    const event = document.createEvent('HTMLEvents') as CustomEvent;
    event.initEvent(eventName, options?.bubbles || true, options?.cancelable || true);
    event.eventName = eventName;
    element.setAttribute('value', value?.toString() || '');
    element.dispatchEvent(event);
  }
}
