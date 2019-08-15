export interface AddWaveInput {
  width: number;
  height: number;
  pointX: number;
  pointY: number;
}

export interface WaveInterface {
  id: number;
  x: number;
  y: number;
  released: boolean;
  size: number;
}

export interface RippleProps {
  mouseover: boolean;
  overlayIsVisible: boolean;
  onOverlayAnimationEnd: Function;
  onWaveDissolve: Function;
  waves: WaveInterface[];
}

export interface UseRippliState {
  focus: boolean;
  mouseover: boolean;
  overlayIsVisible: boolean;
  patched: number;
  touch: boolean;
  waves: WaveInterface[];
}
