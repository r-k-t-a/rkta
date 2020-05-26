/* eslint-disable @typescript-eslint/ban-types */
export interface Wave {
  id: number;
  x: number;
  y: number;
  released: boolean;
  size: number;
}

export interface Props {
  mouseover: boolean;
  overlayIsVisible: boolean;
  onOverlayAnimationEnd: Function;
  onWaveDissolve: Function;
  waves: Wave[];
}
