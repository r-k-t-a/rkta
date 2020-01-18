import { css, keyframes, SerializedStyles } from '@emotion/core';
import { Color, RktaTheme } from '../Provider/theme';

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

export const initialStyle = css`
  animation: ${spin} 1.6s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: currentColor;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  display: block;
  will-change: transform;
`;

export const borderWidth = (
  theme: RktaTheme,
  props: { borderWidth?: number | string },
): SerializedStyles => css`
  border-width: ${props.borderWidth};
`;
export const size = (theme: RktaTheme, props: { size?: number | string }): SerializedStyles => css`
  height: ${props.size};
  width: ${props.size};
`;

export const color = (theme: RktaTheme, props: { color: Color }): SerializedStyles => css`
  border-color: ${theme.color[props.color] || props.color};
`;
