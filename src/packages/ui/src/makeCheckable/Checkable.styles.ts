import { css } from '@emotion/core';
export { color } from '../Text/Text.styles';

export const initialStyle = css`
  border: 3px solid currentColor;
  border-radius: 12px;
  box-sizing: border-box;
  display: inline-block;
  height: 24px;
  /* overflow: hidden; */
  position: relative !important;
  width: 24px;
  > input {
    border-radius: inherit;
    color: inherit;
    cursor: pointer;
    height: inherit;
    left: 0;
    margin: -3px;
    opacity: 0;
    position: absolute;
    top: 0;
    width: inherit;
    :checked + span {
      transform: scale(0.48);
    }
  }
  > span {
    background-color: currentColor;
    border-radius: inherit;
    display: block;
    height: inherit;
    left: 0;
    margin: -3px;
    pointer-events: none;
    position: absolute;
    top: 0;
    transform: scale(0);
    transition: transform 0.24s ease;

    width: inherit;
  }
`;

export const multiple = css`
  border-radius: 3px;
`;
