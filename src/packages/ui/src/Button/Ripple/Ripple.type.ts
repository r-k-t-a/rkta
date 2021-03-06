import { AnimationEventHandler } from 'react';

export type Wave = {
  id: number;
  x: number;
  y: number;
  released: boolean;
  size: number;
};

export type RippleProps = {
  mouseover: boolean;
  overlayIsVisible: boolean;
  onOverlayAnimationEnd: AnimationEventHandler;
  onWaveDissolve: () => void;
  waves: Wave[];
};
