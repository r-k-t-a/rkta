/** @jsx jsx */
import { css, keyframes } from '@emotion/core';

import { CssEmotion } from '../../Provider/theme/theme.types';
import { WaveInterface } from './Ripple.d';

export const BoxCss: CssEmotion = {
  background: 'none',
  borderRadius: 'inherit',
  display: 'block',
  overflow: 'hidden',
  pointerEvents: 'none',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
};

const overlayShow = keyframes`
  from { opacity: 0; }
  to { opacity: 0.2; }
`;
const overlayHide = keyframes`
  from { opacity: 0.2; }
  to { opacity: 0; }
`;
export const OverlayCss = (mouseover: boolean): CssEmotion => ({
  animation: `${mouseover ? overlayShow : overlayHide} 0.4s ease forwards`,
  background: 'currentColor',
  borderRadius: 'inherit',
  display: 'block',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  opacity: 0,
  pointerEvents: 'none',
  willCange: 'opacity',
});

const waveHold = keyframes`
  0% {
    transform: scale(0.7);
  }
  25% {
    transform: scale(0.8);
  }
  40% {
    transform: scale(0.7);
  }
  60% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(0.7);
  }
`;
const waveClick = keyframes`
  from { transform: scale(0); }
  to { opacity: 0; transform: scale(2); }
`;

export const WaveCss = ({ x, y, released, size }: WaveInterface): CssEmotion => ({
  animation: released
    ? `${waveClick} 1.8s cubic-bezier(0.075, 0.820, 0.165, 1.000) forwards`
    : `${waveHold} 0.9s ease infinite`,
  background: 'currentColor',
  borderRadius: size,
  display: 'block',
  opacity: 0.32,
  position: 'absolute',
  top: y,
  left: x,
  height: size,
  width: size,
  willCange: 'transform, opacity',
});
