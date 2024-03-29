import { css, keyframes, SerializedStyles } from '@emotion/core';
import { RktaTheme } from '../Provider/theme';
import { SpinnerProps } from './Spinner.type';
import { cssUnitToString } from '../util';

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
`;

export const borderWidth = (theme: RktaTheme, props: SpinnerProps): SerializedStyles => css`
  border-width: ${cssUnitToString(props.borderWidth)};
`;

export const color = (
  theme: RktaTheme,
  { color: borderColor = '' }: SpinnerProps,
): SerializedStyles => css`
  border-color: ${theme.color[borderColor] || borderColor};
`;

export const size = (theme: RktaTheme, props: SpinnerProps): SerializedStyles => {
  const cssUnit = cssUnitToString(props.size);
  return css`
    height: ${cssUnit};
    width: ${cssUnit};
  `;
};
