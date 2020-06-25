import { css, SerializedStyles } from '@emotion/core';
import { RktaTheme } from '../Provider/theme';
import { ButtonProps } from './Button.type';
import { cssUnitToString } from '../util';

export const initialStyle = css`
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  color: currentColor;
  justify-content: center;
  display: inline-flex;
  outline: none;
  position: relative;
  user-select: none;
  ::-moz-focus-inner {
    border: 0;
  }
  -webkit-tap-highlight-color: transparent;
  > * {
    pointer-events: none;
  }
`;

export const blockLevel = css`
  display: flex;
  width: 100%;
`;

export const busy = (theme: RktaTheme, props: { color: string }): SerializedStyles => {
  return css`
    color: transparent !important;
    pointer-events: none;
    > * {
      visibility: hidden;
      &:last-child {
        align-items: center;
        color: ${theme.color[props.color] || props.color || theme.color.text};
        display: flex;
        justify-content: center;
        position: absolute;
        visibility: visible;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
    }
  `;
};

export const color = (theme: RktaTheme, props: { color: string }): SerializedStyles => {
  const cssColor = theme.color[props.color] || props.color;
  return css`
    color: ${cssColor};
    :active,
    :hover,
    :visited {
      color: ${cssColor};
    }
  `;
};

export const round = (theme: RktaTheme, props: ButtonProps): SerializedStyles => {
  const size = cssUnitToString(props.size || 48);
  return css`
    border-radius: ${size};
    height: ${size};
    min-height: ${size};
    width: ${size};
    padding: 0;
  `;
};

export const size = (theme: RktaTheme, props: ButtonProps): SerializedStyles => {
  const value = cssUnitToString(props.size);
  return css`
    flex-direction: column;
    height: ${value};
    min-height: ${value};
    width: ${value};
  `;
};
