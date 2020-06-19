import { css, keyframes, SerializedStyles } from '@emotion/core';
import { RktaTheme } from '../Provider/theme';
import { Props } from './Placeholder.type';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.48;
  }
  100% {
    opacity: 0;
  }
`;

export const initialStyle = css`
  animation: ${fadeIn} 4.4s ease 0.32s infinite;
  background-color: currentColor;
  border-radius: 3px;
  display: inline-block;
  pointer-events: none;
  height: 1em;
  user-select: none;
  opacity: 0;
  width: 100%;
`;

export const width = (theme: RktaTheme, props: Props): SerializedStyles => css`
  width: ${props.width};
`;
