import { css, keyframes, SerializedStyles } from '@emotion/core';
import { RktaTheme } from '../Provider/theme';
import { LinearProgressProps } from './LinearProgress.type';
import { cssUnitToString } from '../util';

const defaultAnimation = keyframes`
  0% {
    background-size: 200% 100%;
    background-position: left -31.25% top 0%;
  }
  50% {
    background-size: 800% 100%;
    background-position: left -49% top 0%;
  }
  100% {
    background-size: 400% 100%;
    background-position: left -102% top 0%;
  }
`;

export const initialStyle = (theme: RktaTheme): SerializedStyles => css`
  /* appearance: none; */
  background-color: ${theme.color.divider};
  border: none;
  border-radius: 3px;
  color: inherit;
  display: block;
  height: 4px;
  width: 100%;

  &::-webkit-progress-bar {
    background-color: transparent;
  }
  &::-webkit-progress-value {
    background-color: currentColor;
    transition: all 0.2s;
  }
  &::-moz-progress-bar {
    background-color: currentColor;
    transition: all 0.2s;
  }
  &::-ms-fill {
    border: none;
    background-color: currentColor;
    transition: all 0.2s;
  }
  &:indeterminate {
    animation: ${defaultAnimation} 2s infinite linear;
    background-size: 200% 100%;
    background-image: linear-gradient(
      to right,
      transparent 50%,
      currentColor 50%,
      currentColor 60%,
      transparent 60%,
      transparent 71.5%,
      currentColor 71.5%,
      currentColor 84%,
      transparent 84%
    );
  }
  &:indeterminate::-moz-progress-bar {
    background-color: transparent;
  }
  &:indeterminate::-ms-fill {
    animation-name: none;
  }
`;

export const color = (theme: RktaTheme, props: { color: string }): SerializedStyles => css`
  color: ${theme.color[props.color] || props.color};
`;

export const size = (theme: RktaTheme, props: LinearProgressProps): SerializedStyles => {
  const cssUnit = cssUnitToString(props.size);
  return css`
    height: ${cssUnit};
  `;
};
