import { css, SerializedStyles } from '@emotion/core';
import { RktaTheme } from '../Provider/theme';
import { InputBaseProps } from './InputBase.type';

export const initialStyle = (theme: RktaTheme): SerializedStyles => css`
  border-radius: inherit;
  min-width: 0;
  position: relative;
  .caption {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    height: 100%;
    left: 0;
    overflow: hidden;
    padding: inherit;
    padding-top: 0;
    padding-bottom: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    transition: font 0.32s ease, height 0.32s ease;
    user-select: none;
  }
  input,
  textarea {
    background-color: transparent;
    border: none;
    box-sizing: border-box;
    border-radius: inherit;
    color: inherit;
    display: block;
    font: inherit;
    font-size: 16px;
    margin: 0;
    outline: none;
    width: 100%;
    -webkit-tap-highlight-color: transparent;
    &:invalid ~ .caption:after {
      content: '●';
      color: ${theme.color.error};
      margin-left: 0.2em;
    }
    &:-webkit-autofill {
      transition: background-color 5000s ease-in-out 0s;
    }
  }
  input,
  .value {
    height: 100%;
    left: 0;
    line-height: 20px;
    padding: inherit;
    position: absolute;
  }
  textarea {
    line-height: 24px;
    min-height: 48px;
    overflow: auto;
    resize: none;
  }
  .value {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const active = css`
  .caption {
    font-size: 10px;
    height: 40%;
    line-height: 12px;
  }
`;

export const maxRows = (
  theme: RktaTheme,
  { maxRows: max = 2 }: InputBaseProps,
): SerializedStyles => css`
  textarea {
    max-height: ${max * 24}px;
  }
`;

export const multiline = (theme: RktaTheme, props: { active: boolean }): SerializedStyles => css`
  .caption {
    height: ${props.active ? '24px' : '100%'};
    max-height: 56px;
  }
  height: auto;
  padding-bottom: 8px;
  padding-top: 24px;
`;
