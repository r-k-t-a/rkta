import toString from 'lodash/toString';
import { Value } from '../InputBase/InputBase.type';

interface Options {
  bubbles?: boolean;
  cancelable?: boolean;
  value?: Value;
}

interface CustomEvent extends Event {
  eventName: string;
}

export function dispatchDomEvent(element: Element, eventName: string, options?: Options): void {
  const { bubbles = true, cancelable = true, value } = options || {};
  if (document.createEvent) {
    const event = document.createEvent('HTMLEvents') as CustomEvent;
    event.initEvent(eventName, bubbles, cancelable);
    event.eventName = eventName;
    if (value) element.setAttribute('value', toString(value));
    element.dispatchEvent(event);
  }
}
