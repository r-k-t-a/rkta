import { keyframes } from '@emotion/core';
import { CssRkta, ThemeInterface } from '../Provider/theme/theme.types';

const spin = keyframes`
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  24% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
`;

export const initialStyle = (
  theme: ThemeInterface,
  props: { borderWidth: number; size: number },
): CssRkta => ({
  animation: `${spin} 1.6s cubic-bezier(0.5, 0, 0.5, 1) infinite`,
  borderWidth: props.borderWidth,
  borderColor: 'inherit',
  borderLeftColor: 'transparent !important',
  borderRightColor: 'transparent !important',
  borderStyle: 'solid',
  borderRadius: '50%',
  boxSizing: 'border-box',
  height: props.size,
  width: props.size,
  willChange: 'transform',
});

export const color = (theme: ThemeInterface, props: { color?: string }): CssRkta => ({
  borderColor: props.color ? theme.color[props.color] || props.color : 'inherit',
});
