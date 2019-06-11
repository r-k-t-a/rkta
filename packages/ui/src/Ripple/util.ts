export interface Bounds {
  height: number;
  width: number;
  top: number;
  left: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getBounds = ({ target }: { target: any }): Bounds => {
  const { clientHeight, clientWidth } = target;
  const { top, left } = target.getBoundingClientRect();
  return {
    height: clientHeight,
    width: clientWidth,
    top,
    left,
  };
};
