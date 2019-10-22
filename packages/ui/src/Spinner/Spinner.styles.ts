import { keyframes } from '@emotion/core';
import { Color, CssRkta, RktaTheme } from '../Provider/theme/theme.type';

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

export const initialStyle: CssRkta = {
  animation: `${spin} 1.6s cubic-bezier(0.5, 0, 0.5, 1) infinite`,
  borderColor: 'currentColor',
  borderLeftColor: 'transparent !important',
  borderRightColor: 'transparent !important',
  borderStyle: 'solid',
  borderRadius: '50%',
  boxSizing: 'border-box',
  display: 'block',
  willChange: 'transform',
};

export const borderWidth = (
  theme: RktaTheme,
  props: { borderWidth?: number | string },
): CssRkta => ({
  borderWidth: props.borderWidth,
});
export const size = (theme: RktaTheme, props: { size?: number | string }): CssRkta => ({
  height: props.size,
  width: props.size,
});

export const color = (theme: RktaTheme, props: { color: Color }): CssRkta => ({
  borderColor: theme.color[props.color] || props.color,
});
