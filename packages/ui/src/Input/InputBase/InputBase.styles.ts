import { css } from '@emotion/core';
import { CssEmotion } from '../../Provider/theme/theme.defs';

export const initialStyle: CssEmotion = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  transition: justify-content 0.24s ease;
  will-change: justify-content;
  span {
    align-self: flex-start;
    line-height: 12px;
    transition: font 0.24s ease;
    will-change: font;
  }
  input {
    background-color: transparent;
    border: none;
    display: block;
    font: inherit;
    height: 1px;
    outline: none;
    margin: 0;
    padding: 0;
    transition: height 0.24s ease;
    will-change: height;
  }
`;

export const active: CssEmotion = css`
  justify-content: space-evenly;
  span {
    font-size: 10px;
  }
  input {
    height: 20px;
  }
`;
