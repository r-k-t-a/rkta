import { css, SerializedStyles } from '@emotion/core';
import { RktaTheme } from '../Provider/theme';
import { Props } from './InputBase.type';

export const initialStyle = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  transition: justify-content 0.24s ease;
  will-change: justify-content;
  .caption {
    align-self: flex-start;
    line-height: 20px;
    pointer-events: none;
    transition: font 0.24s ease;
    user-select: none;
    will-change: font;
  }
  .value,
  input,
  textarea {
    background-color: transparent;
    border: none;
    color: inherit;
    display: block;
    font: inherit;
    font-size: 16px;
    margin: 0;
    outline: none;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
  }
  .value,
  input {
    height: 20px;
    line-height: 20px;
    margin-top: -20px;
    transform: translateY(40%);
    transition: margin 0.24s ease, transform 0.24s ease;
    will-change: margin, transform;
  }
  textarea {
    line-height: 24px;
    min-height: 48px;
    overflow: auto;
    resize: none;
  }
`;

export const active = css`
  justify-content: space-evenly;
  .caption {
    font-size: 10px;
    line-height: 12px;
    margin-bottom: 0;
  }
  .value,
  input {
    margin-top: 0;
    transform: translateY(0px);
  }
`;

export const maxRows = (theme: RktaTheme, { maxRows: max = 2 }: Props): SerializedStyles => css`
  textarea {
    max-height: ${max * 24}px;
  }
`;

export const multiline = css`
  height: auto;
  padding-bottom: 8px;
  padding-top: 8px;
  .caption {
    line-height: 20px;
  }
`;
