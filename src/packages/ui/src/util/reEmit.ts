export const reEmit = <EventType>(event: EventType, handle?: (event: EventType) => void): void => {
  if (typeof handle === 'function') handle(event);
};
