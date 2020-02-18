export const compareNodes = (a: HTMLElement, b: HTMLElement): boolean => {
  try {
    return a.isSameNode(b);
  } catch (e) {
    return a === b;
  }
};
