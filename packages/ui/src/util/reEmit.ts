export const reEmit = (event: {}, handle?: Function): void => {
  if (typeof handle === 'function') handle(event);
};
