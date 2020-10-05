export const reEmit = <EventType>(
  event: EventType,
  handle?: (handlerEvent: EventType) => void,
): void => {
  if (typeof handle === 'function') handle(event);
};
