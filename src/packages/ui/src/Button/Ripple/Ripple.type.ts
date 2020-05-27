import { AnimationEventHandler } from 'react';

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
  onOverlayAnimationEnd: AnimationEventHandler;
  onWaveDissolve: () => void;
  waves: Wave[];
}
