import { css, keyframes, SerializedStyles } from '@emotion/core';
import { RktaTheme } from '../Provider/theme';
import { PlaceholderProps } from './Placeholder.type';

const fadeIn = keyframes`
  0% {
    opacity: 0.08;
  }
  50% {
    opacity: 0.48;
  }
  100% {
    opacity: 0.08;
  }
`;

export const initialStyle = css`
  align-items: center;
  animation: ${fadeIn} 4.4s ease 0.32s infinite;
  display: flex;
  pointer-events: none;
  position: relative;
  user-select: none;
  opacity: 0;
  width: 100%;
  &:before {
    content: '|';
    color: transparent;
    overflow: hidden;
    width: 0;
  }
  &:after {
    content: '';
    background-color: currentColor;
    border-radius: 3px;
    display: block;
    flex: 1;
    height: 1em;
  }
`;

export const inline = css`
  display: inline-flex;
`;

export const width = (theme: RktaTheme, props: PlaceholderProps): SerializedStyles => css`
  width: ${props.width};
`;
