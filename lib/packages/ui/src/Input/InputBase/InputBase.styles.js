import { css } from '@emotion/core';
export const initialStyle = css `
  display: flex;
  justify-content: center;
  flex-direction: column;
  transition: justify-content 0.24s ease;
  will-change: justify-content;
  span {
    align-self: flex-start;
    line-height: 12px;
    pointer-events: none;
    transition: font 0.24s ease;
    user-select: none;
    will-change: font;
  }
  input {
    background-color: transparent;
    border: none;
    display: block;
    font: inherit;
    height: 20px;
    margin: 0;
    margin-top: -20px;
    outline: none;
    padding: 0;
    transition: margin 0.24s ease, transform 0.24s ease;
    transform: translateY(40%);
    will-change: margin, transform;
    -webkit-tap-highlight-color: transparent;
  }
`;
export const active = css `
  justify-content: space-evenly;
  span {
    font-size: 10px;
    margin-bottom: 0;
  }
  input {
    margin-top: 0;
    transform: translateY(0px);
  }
`;
//# sourceMappingURL=InputBase.styles.js.map