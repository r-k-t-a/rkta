export default (event: {}, handle?: Function): void => {
  if (typeof handle === 'function') handle(event);
};
