import { css, SerializedStyles } from '@emotion/core';
import { RktaTheme } from '../Provider/theme';
import { ScrollBoxProps } from './ScrollBox.type';

export const initialStyle = css`
  display: block;
  overflow: hidden;
  overflow-scrolling: touch;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
`;

export const animateHeight = css`
  box-sizing: border-box;
  transition: height 0.24s ease;
  will-change: height;
`;

export const height = (theme: RktaTheme, props: ScrollBoxProps): SerializedStyles => css`
  height: ${props.height};
`;

export const hideScrollbars = css`
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const snap = css`
  scroll-snap-type: both mandatory;
  > * {
    scroll-snap-align: start;
  }
`;

export const x = css`
  display: flex;
  overflow-x: scroll;
`;

export const y = css`
  overflow-y: scroll;
`;
